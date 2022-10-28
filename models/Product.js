import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      maxlength: 60,
    },
    description: {
      type: String,
      required: true,
      maxlength: 300,
    },
    img: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: true,
      maxlength: 200,
    },
    prices: {
      type: Number,
      required: true,
    },
    extras: {
      type: [
        {
          text: { type: String, required: true },
          price: { type: Number, required: true },
        },
      ],
    },
  },
  { timestamps: true }
);

export default mongoose.models.Product ||
  mongoose.model("Product", ProductSchema);
