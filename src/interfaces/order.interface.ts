export interface Iorder {
    createdDate: Date,
    detail: Iorderdetail[]
}

export interface Iorderdetail {
    keydetail: string,
    productname: string;
    amount: string;
}