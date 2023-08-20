import { USER } from "src/app/shared/models/user.model"


export interface RegisterApiResponse {
  data: Data
  message: string
  statusCode: number
  success: boolean
}
export interface BasicApiResponse {
  data: Data
  message: string
  statusCode: number
  success: boolean
}

export interface Data {
  user: USER
}

// LoginApi Response

export interface LoginApiResponse {
  data: Data
  message: string
  statusCode: number
  success: boolean
}

export interface Data {
  accessToken: string
  refreshToken: string
  user: User
}

export interface User {
  __v: number
  _id: string
  avatar: Avatar
  createdAt: string
  email: string
  isEmailVerified: boolean
  loginType: string
  role: string
  updatedAt: string
  username: string
}

export interface Avatar {
  _id: string
  localPath: string
  url: string
}


// loggedInUser Model

export interface LoggedInUser {
    data: USER,
    message: string
    statusCode: number
    success: boolean
}
