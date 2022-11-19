import { useState, useRef, useEffect } from "react";
import { usePaystackPayment } from "react-paystack";
import dateformat from "dateformat";
import toast, { Toaster } from "react-hot-toast";
import { APP_NAME, MESSAGES } from "./../util/constants";
import { formatPrice, getErrorMessage } from "./../util/index";
import axios from "axios";
import styles from "../styles/PaystackPayment.module.css";
const PaystackPayment = ({
  onComplete,
  email,
  amount,
  reference = "",
  orderId,
}) => {
  const [paymentSuccessfulText, setPaymentSuccessfulText] = useState("");
  const [paymentText, setPaymentText] = useState("Make Payment");
  const [refNum, setRefNum] = useState(() => {
    if (reference && reference.length > 0) {
      return reference;
    }

    let ref = dateformat(new Date(), "isoUtcDateTime");
    ref = ref
      .replace("-", "")
      .replace(":", "")
      .replace("-", "")
      .replace(":", "")
      .split("Z")[0];

    return APP_NAME.split(" ")[0] + "-" + ref;
  });

  const makePayment = usePaystackPayment({
    email,
    amount,
    reference: refNum,
    publicKey: process.env.PUBLIC_PAYSTACK_KEY,
  });

  useEffect(() => {
    if (paymentText === "Verify") {
      verifyPayment();
    } else if (paymentText === "Successful") {
      setTimeout(() => setPaymentText("Make Payment"), 1000);
    }
  }, [paymentText]);

  const onSuccess = (ref) => {
    setPaymentText("Verify");
  };

  const performPayment = async () => {
    switch (paymentText) {
      case "Make Payment":
        setPaymentText("Loading...");
        try {
          const { data } = await axios.post(
            "http://localhost:3000/api/payments",
            { reference: refNum, order: orderId, total: amount }
          );
          makePayment(
            (ref) => onSuccess(ref),
            () => setPaymentText("Uh-oh, you need to make a payment")
          );
        } catch (e) {
          toast.error(getErrorMessage(e));
          setPaymentText(`You need to make payment first!`);
        }

        break;
      case "Verify Payment":
        verifyPayment();
        break;
    }
  };

  const verifyPayment = async () => {
    setPaymentText("Validating Payment...");
    try {
      const { data } = await axios.get(
        `http://localhost:3000/api/payments/verify?&reference=${refNum}`
      );
      toast.success("Payment Successful!");
      updatePayment();
      setPaymentText("Done");
    } catch (e) {
      toast.error("Payment Verification Failed");
    }
  };

  const updatePayment = async () => {
    try {
      const { data } = await axios.patch("http://localhost:3000/api/payments", {
        reference: refNum,
        status: 1,
      });
      setPaymentSuccessfulText("Payment Successful! Your order is complete!");
      setTimeout(() => onComplete(refNum), 3000);
    } catch (e) {
      toast.error("Failed to update Payment status");
    }
  };

  return (
    <div className={styles.container}>
      <Toaster toastOptions={{ duration: 5000 }} />
      {paymentText === "Done" ? (
        <div className={styles.done}>
          <span>{paymentSuccessfulText}</span>
        </div>
      ) : (
        <>
          <p className={styles.heading}>
            Please complete your payment to confirm your order
          </p>
          <p className={styles.amount}>
            <span>₦</span>
            {formatPrice(amount / 100)}
          </p>
          <p className={styles.ref}>
            Reference Number: <span>{refNum}</span>
          </p>

          {!paymentText.includes(".") ? (
            <button className={styles.button} onClick={performPayment}>
              Pay Now
            </button>
          ) : (
            <div className={styles.loader}>
              <span className={styles.spinner}></span>
              <p className={styles.loadText}>{paymentText}</p>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default PaystackPayment;
