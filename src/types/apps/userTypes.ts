// ** Types
import { ThemeColor } from 'src/@core/layouts/types'

export type UsersType = {
  id: number
  role: string
  email: string
  status: string
  avatar: string
  billing: string
  company: string
  country: string
  contact: string
  fullName: string
  username: string
  currentPlan: string
  avatarColor?: ThemeColor
}

export type CustomUsersType = {
  id: number
  email: string
  first_name: string
  last_name: string
  contact: string
  user_status: string
  user_role: string
}

export type ProjectListDataType = {
  id: number
  img: string
  hours: string
  totalTask: string
  projectType: string
  projectTitle: string
  progressValue: number
  progressColor: ThemeColor
}

export type RoleType = {
  id: number
  name: string
  description: string
  permissions: []
}

export type StatusType = {
  id: number
  name: string
  description: string
}
