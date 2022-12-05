import axios from "axios";

const handler = async (req, res) => {
  const fullURL = `http://localhost:3000${req.url}`;
  const params = new URL(fullURL).searchParams;
  const reference = params.get("reference");
  switch (req.method) {
    case "GET":
      if (!reference) {
        return res.status(400).json({
          msg: "reference value is missing in the request",
        });
      }
      try {
        const { data } = await axios.get(
          `https://api.paystack.co/transaction/verify/${reference}`,
          {
            headers: {
              authorization: `Bearer ${process.env.SECRET_PAYSTACK_KEY}`,
            },
          }
        );
        res.json({
          msg: data.data.status,
          success: data.data.status.includes("success"),
        });
        // console.log(data);
      } catch (error) {
        // console.log(error);
        console.log(process.env.NODE_ENV);
        console.log(error.message);
        const isReferenceError = error.message.includes("400");
        const isAuthError = error.message.includes("401");

        const msg = isReferenceError
          ? "Invalid Payment Reference"
          : isAuthError
          ? "An error occurred while validating your payment. Please try again later."
          : "An Unknown Error Occurred. Please try again";
        const success = !isReferenceError && !isAuthError;
        res.status(500).json({
          msg,
          stack: process.env.NODE_ENV === "development" ? error : null,
          success,
        });
      }
      break;

    default:
      res.status(405).json({
        msg: "Method Not Allowed",
      });
      break;
  }
};

export default handler;
