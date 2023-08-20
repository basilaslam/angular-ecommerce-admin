export interface CatogeryApiResponse {
  data: CatogeryData
  message: string
  statusCode: number
  success: boolean
}

export interface CatogeryData {
  categories: Category[]
  hasNextPage: boolean
  hasPrevPage: boolean
  limit: number
  nextPage: number
  page: number
  prevPage: any
  serialNumberStartFrom: number
  totalCategories: number
  totalPages: number
}

export interface Category {
  __v: number
  _id: string
  createdAt: string
  name: string
  owner: string
  updatedAt: string
}
