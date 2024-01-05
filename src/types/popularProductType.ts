export interface popularProductType {
    id: string;
    productTitle: string;
    img: string;
    price: string;
    rating?: string;
}

export interface limitedOfferProductType {
    id: string | number;
    productName: string;
    img: string;
    price: string;
    offerPrice: string;
}

export interface ProductType {
    _id: string;
    title: string;
    images: string[];
    quantity?: string | number;
    description?: string;
    price: number;
    category: string;
    properties: string | null;
}
