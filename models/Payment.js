import mongoose from "mongoose";

const PaymentSchema = new mongoose.Schema(
  {
    customer: {
      type: String,
      required: true,
      maxlength: 60,
    },
    phone: {
      type: Number,
      required: true,
      maxlength: 11,
    },
    order: {
      type: String,
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
