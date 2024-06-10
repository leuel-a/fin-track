'use client'

import * as React from 'react'
import Link from 'next/link'
import {useSearchParams} from 'next/navigation'
import TransactionsFilter from './components/TransactionsFilter'
import PageTitle from '../components/PageTitle'
import {Button} from '@/components/ui/button'
import {columns, TransactionDataTable} from './data-table'
import DatePickerWithRange from '@/app/components/DatePickerWithRange'

const transactions = {
    data: [
        {
            "id": 1010,
            "categoryId": null,
            "category": null,
            "status": "Failed",
            "quantity": 7,
            "type": "Expense",
            "date": "2023-12-26T12:32:00",
            "amount": 455.86,
            "region": "176 Andrew Cliffs\nBaileyfort, HI 93354",
            "numberOfItems": null,
            "accountNumber": null,
            "description": "Description for row 0",
            "costPerItem": 80.07984415,
            "paymentMethod": "Cash"
        },
        {
            "id": 1011,
            "categoryId": null,
            "category": null,
            "status": "Completed",
            "quantity": 8,
            "type": "Income",
            "date": "2023-10-11T06:48:00",
            "amount": 419.77,
            "region": "489 Juan Loop Apt. 093\nNorth Brettville, WV 72610",
            "numberOfItems": null,
            "accountNumber": null,
            "description": "Description for row 7",
            "costPerItem": 56.02516419,
            "paymentMethod": "Debit Card"
        },
        {
            "id": 1012,
            "categoryId": null,
            "category": null,
            "status": "Completed",
            "quantity": 5,
            "type": "Expense",
            "date": "2024-02-27T11:13:00",
            "amount": 96.98,
            "region": "528 Justin Expressway Apt. 336\nCabreraborough, SD 17915",
            "numberOfItems": null,
            "accountNumber": null,
            "description": "Description for row 8",
            "costPerItem": 23.85798105,
            "paymentMethod": "Credit Card"
        },
        {
            "id": 1013,
            "categoryId": null,
            "category": null,
            "status": "Failed",
            "quantity": 8,
            "type": "Expense",
            "date": "2023-12-29T05:07:00",
            "amount": 533.09,
            "region": "PSC 1498, Box 4142\nAPO AP 10928",
            "numberOfItems": null,
            "accountNumber": null,
            "description": "Description for row 11",
            "costPerItem": 78.12314235,
            "paymentMethod": "PayPal"
        },
        {
            "id": 1014,
            "categoryId": null,
            "category": null,
            "status": "Failed",
            "quantity": 2,
            "type": "Expense",
            "date": "2023-09-23T18:51:00",
            "amount": 34.07,
            "region": "419 Kerr Passage Apt. 443\nMartinezfort, MN 45678",
            "numberOfItems": null,
            "accountNumber": null,
            "description": "Description for row 15",
            "costPerItem": 19.91484964,
            "paymentMethod": "Cash"
        },
        {
            "id": 1015,
            "categoryId": null,
            "category": null,
            "status": "Pending",
            "quantity": 8,
            "type": "Expense",
            "date": "2024-02-28T21:34:00",
            "amount": 611.52,
            "region": "1250 Gary Way Apt. 756\nSouth Thomasport, ND 39813",
            "numberOfItems": null,
            "accountNumber": null,
            "description": "Description for row 16",
            "costPerItem": 90.11467295,
            "paymentMethod": "Credit Card"
        },
        {
            "id": 1016,
            "categoryId": null,
            "category": null,
            "status": "Pending",
            "quantity": 5,
            "type": "Expense",
            "date": "2024-04-06T18:59:00",
            "amount": 311.24,
            "region": "44623 Elizabeth Throughway Apt. 440\nAmberview, VA 51707",
            "numberOfItems": null,
            "accountNumber": null,
            "description": "Description for row 19",
            "costPerItem": 77.09057502,
            "paymentMethod": "Credit Card"
        },
        {
            "id": 1017,
            "categoryId": null,
            "category": null,
            "status": "Failed",
            "quantity": 6,
            "type": "Expense",
            "date": "2024-04-24T12:16:00",
            "amount": 311.54,
            "region": "12858 Kidd Roads\nCantuberg, AR 21025",
            "numberOfItems": null,
            "accountNumber": null,
            "description": "Description for row 21",
            "costPerItem": 61.40081305,
            "paymentMethod": "Credit Card"
        },
        {
            "id": 1018,
            "categoryId": null,
            "category": null,
            "status": "Completed",
            "quantity": 9,
            "type": "Income",
            "date": "2023-11-28T21:59:00",
            "amount": 433.88,
            "region": "90868 Garcia Bypass Apt. 888\nNew Joshua, WY 53394",
            "numberOfItems": null,
            "accountNumber": null,
            "description": "Description for row 22",
            "costPerItem": 54.17017953,
            "paymentMethod": "Cash"
        },
        {
            "id": 1019,
            "categoryId": null,
            "category": null,
            "status": "Failed",
            "quantity": 1,
            "type": "Expense",
            "date": "2023-10-22T23:46:00",
            "amount": 64.35,
            "region": "78412 Hernandez Lock Suite 138\nSouth Lauren, PA 69595",
            "numberOfItems": null,
            "accountNumber": null,
            "description": "Description for row 23",
            "costPerItem": 64.4179452,
            "paymentMethod": "Debit Card"
        }
    ],
    "pageSize": 10,
    "currentPage": 1,
    "totalCount": 666,
    "nextPage": 2,
    "previousPage": null,
    "totalPages": 67
}

export default function TransactionsPage() {
  const searchParams = useSearchParams()

  return (
    <div className="relative space-y-2">
      <PageTitle title="Transactions" />
      <div className="flex gap-2">
        <div className="flex items-center justify-center gap-3">
          <h3 className="text-sm font-semibold">Date Range</h3>
          <DatePickerWithRange />
          <TransactionsFilter />
        </div>
      </div>
        <TransactionDataTable
            nextPage={transactions?.nextPage}
            previousPage={transactions?.previousPage}
            columns={columns}
            data={transactions?.data}
          />
          <Link href="/dashboard/transactions/add">
            <Button className="absolute bottom-3 w-52 bg-zinc-700">Add Transaction</Button>
          </Link>
    </div>
  )
}
