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
}
