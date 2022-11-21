import mongoose, { Types } from "mongoose";

const PaymentSchema = new mongoose.Schema(
  {
    order: {
      type: Types.ObjectId,
      ref: "Order",
      required: true,
    },
    reference: {
      type: String,
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
    status: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Payment ||
  mongoose.model("Payment", PaymentSchema);

//todo: const data = await model.findOne({}).populate("order").exec()
