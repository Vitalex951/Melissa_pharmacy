import {StaticImageData} from "next/image";

export interface Product {
    id: number
    title: string
    description: string
    image: StaticImageData
    article?: string
    category?: string
    manufacturer?: string
}