

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
  user: Admin
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
  user: Admin
}

export interface Admin {
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
    data: Admin,
    message: string
    statusCode: number
    success: boolean
}
