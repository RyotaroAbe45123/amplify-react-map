import { Pin } from "../types/api";
import { a, b } from "../types/data";

export const f = 100;

export const cate1 = (p: Pin[], c: a) => {
    return p.filter((data: Pin) => data.category_1 === c)
}

export const cate2 = (p: Pin[], c: b) => {
    return p.filter((data: Pin) => data.category_2 <= c)
}