export interface popularProductType {
    id: string;
    productTitle: string,
    img: string;
    price: string;
    rating?: string;
}

export interface limitedOfferProductType {
    id: string|number;
    productName: string;
    img: string;
    price: string;
    offerPrice:string
}