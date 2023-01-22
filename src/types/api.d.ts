export type Pin = {
    id: number,
    name: string,
    address: {
        lat: number | string,
        lng: number | string,
    },
    category_1: string,
    category_2: number
}