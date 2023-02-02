export interface IContactRequest {
  name: string
  email: string
  phone: string
}

export interface IContact {
  id: string
  name: string
  email: string
  phone: string
  date: Date
}

export interface IContactUpdate {
  name?: string
  email?: string
  phone?: string
}