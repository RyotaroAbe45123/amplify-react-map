export type Pin = {
    id: number,
    name: string,
    address: {
        lat: number | string,
        lng: number | string,
    }    
}