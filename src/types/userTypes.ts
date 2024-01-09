interface Address {
    type: string;
    require: true;
}

interface Product {
    name: string;
    banner: string;
    price: number;
    description?: string;
}

interface CartItem {
    product: Product;
    unit: number;
}

interface WishlistItem {
    name: string;
    description?: string;
    banner: string;
    available: boolean;
    price: number;
}

interface Order {
    amount: string;
    date: string;
}

export interface RegisteredUserInterface {
    fullName: string;
    email: string;
    token: string;
    _id: string;
    phone: string;
    __v: number;
    password: string;
    address: Address[];
    cart: CartItem[];
    wishlist: WishlistItem[];
    orders: Order[];
}
