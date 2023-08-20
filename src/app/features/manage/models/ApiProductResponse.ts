import { Product } from "src/app/shared/models/product.model"

export interface AllProductsResponseModel {
  data: Data
  message: string
  statusCode: number
  success: boolean
}

export interface Data {
  hasNextPage: boolean
  hasPrevPage: boolean
  limit: number
  nextPage: number
  page: number
  prevPage: any
  products: Product[]
  serialNumberStartFrom: number
  totalPages: number
  totalProducts: number
}


export interface SingleProductsResponseModel {
  data: Product
  message: string
  statusCode: number
  success: boolean
}


