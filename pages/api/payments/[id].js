import dbConnect from "../../../util/mongo";
import Payment from "../../../models/Payment";

export default async function handler(req, res) {
  const {
    method,
    query: { id },
  } = req;

  await dbConnect();

  if (method === "GET") {
    try {
      const payment = await Payment.findById(id);
      res.status(200).json(payment);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  if (method === "PUT") {
    try {
      const payment = await Payment.create(req.body);
      res.status(201).json(payment);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
