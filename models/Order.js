import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
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
    address: {
      type: String,
      required: true,
      maxlength: 300,
    },
    total: {
      type: Number,
      required: true,
    },
    status: {
      type: Number,
      default: 0,
    },
    method: {
      type: Number,
      required: true,
    },
    items: [
      {
        productId: String,
        productName: String,
        price: Number,
        qtn: Number,
        extras: [
          {
            text: String,
            price: String,
          },
        ],
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.models.Order || mongoose.model("Order", OrderSchema);
