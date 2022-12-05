import dbConnect from "../../../util/mongo";
import Payment from "../../../models/Payment";

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  if (method === "GET") {
    try {
      const payments = await Payment.find();
      res.status(200).json(payments);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  if (method === "POST") {
    try {
      const payment = await Payment.create(req.body);
      res.status(201).json(payment);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  if (method === "PUT") {
    console.log(req.headers);
    try {
      const { reference, status } = req.body;
      console.log(reference);
      const payment = await Payment.updateOne(
        { reference },
        { status },
        { new: true }
      );
      // console.log(payment);
      res.status(200).json({
        msg:
          payment.modifiedCount >= 1
            ? "Payment updated successfully"
            : "No payment to update",
        isSaved: payment.modifiedCount >= 1 ? true : false,
      });
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
