export type ordertype = {
    sits : {
        Loge: number,
        Parkett: number,
    },
    price: number,
}

export class createBooking{
    readonly name: string;
    readonly email: string;
    readonly order: ordertype;
}