import mongoose, { Document, Schema, Model } from "mongoose";

interface Address {
    type: Schema.Types.ObjectId;
    ref: "address";
    require: true;
}

interface Product {
    name: string;
    banner: string;
    price: number;
}

interface CartItem {
    product: Product;
    unit: number;
}

interface WishlistItem {
    product: Product;
}

interface Order {
    amount: string;
    date: string;
}

interface UserDocument extends Document {
    fullName: string;
    email: string;
    password: string;
    salt: string;
    phone: string;
    address: Address[];
    cart: CartItem[];
    wishlist: WishlistItem[];
    orders: Order[];
}

const UserSchema: Schema = new Schema(
    {
        fullName: { type: String },
        email: { type: String },
        phone: { type: String },
        password: { type: String },
        address: [
            {
                type: Schema.Types.ObjectId,
                ref: "Address",
                required: true,
            },
        ],
        cart: [
            {
                product: {
                    type: Schema.Types.ObjectId,
                    ref: "Product",
                },
                unit: { type: Number, required: true },
            },
        ],
        wishlist: [
            {
                product: {
                    type: Schema.Types.ObjectId,
                    ref: "Product",
                }
            },
        ],
        orders: [
            {
                amount: { type: String },
                date: { type: Date, default: Date.now },
            },
        ],
    },
    {
        timestamps: true,
    }
);
type UserModel = Model<UserDocument>;
const User: UserModel = mongoose.models.User || mongoose.model<UserDocument>("User", UserSchema);
export default User;
