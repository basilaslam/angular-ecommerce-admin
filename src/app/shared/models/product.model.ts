export interface Product {
  __v: number
  _id: string
  category: string
  createdAt: string
  description: string
  mainImage: MainImage
  name: string
  owner: string
  price: number
  stock: number
  subImages: SubImage[]
  updatedAt: string
}

export interface MainImage {
  _id: string
  localPath: string
  url: string
}

export interface SubImage {
  _id: string
  localPath: string
  url: string
}


export interface ProductFormModel {
  category: string
  description: string
  mainImage: string
  name: string
  price: number
  stock: number
  subImages: string[]
}
