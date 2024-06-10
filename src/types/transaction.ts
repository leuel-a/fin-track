import { Category } from './categories'

export const months = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December']

export type MonthlyTransactionSummary = {
  month: number | string
  income: number
  expense: number
  total: number
}

export type Transaction = {
  id: number
  date: string
  type: string
  amount: number
  status: string
  region?: string | null
  description?: string | null
  paymentMethod?: string | null
  quantity?: number
  unitPrice?: number
  accountNumber?: string | null
  categoryId: number | null
  category: Category | null
}
