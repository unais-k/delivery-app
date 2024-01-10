import { model, models, Schema } from "mongoose";
const OrderSchema = new Schema(
  {
    line_items: [
      {
        price_data: {
          currency: String,
          product_data: {
            name: String,
          },
          unit_amount: Number,
        },
        quantity: Number,
      },
    ],
    address: {
      fullName: { type: String, required: true },
      email: { type: String, required: true },
      town: { type: String },
      address: { type: String },
      streetName: { type: String },
      PINCode: { type: String },
      phone: { type: String },
      state: { type: String },
    },
    paid: {
      type: Boolean,
      default: false,
    },
    product: {
      type: Schema.Types.ObjectId,
      ref: "Product",
    },
  },
  {
    timestamps: true,
  }
);

export const Order = models?.Order || model("Order", OrderSchema);
