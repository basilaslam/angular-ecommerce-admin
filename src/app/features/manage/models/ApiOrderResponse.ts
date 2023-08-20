export interface OrderApiResponse {
  data: Data
  message: string
  statusCode: number
  success: boolean
}

export interface Data {
  hasNextPage: boolean
  hasPrevPage: boolean
  limit: number
  nextPage: any
  orders: Order[]
  page: number
  prevPage: number
  serialNumberStartFrom: number
  totalOrders: number
  totalPages: number
}

export interface Order {
  __v: number
  _id: string
  address: Address
  coupon?: Coupon
  createdAt: string
  customer: Customer
  discountedOrderPrice: number
  isPaymentDone: boolean
  orderPrice: number
  paymentId: string
  paymentProvider: string
  status: string
  totalOrderItems: number
  updatedAt: string
}

export interface Address {
  __v: number
  _id: string
  addressLine1: string
  addressLine2: string
  city: string
  country: string
  createdAt: string
  owner: string
  pincode: string
  state: string
  updatedAt: string
}

export interface Coupon {
  _id: string
  couponCode: string
  name: string
}

export interface Customer {
  _id: string
  email: string
  username: string
}

export interface SingleOrderResponseModel {
  data: Order;
  message: string;
  statusCode: number;
  success: boolean;
}
