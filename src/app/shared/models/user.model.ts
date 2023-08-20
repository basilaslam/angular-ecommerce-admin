export interface USER {
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
