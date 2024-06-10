'use client'

import {months} from '@/types/transaction'
import {useGetTransactionSummaryForYearQuery} from '@/features/transaction/transactionSlice'
import {CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from 'recharts'

import {transactions} from "@/app/dashboard/data";

export default function LineChartComponent() {
  const {isLoading, isError, data} = useGetTransactionSummaryForYearQuery(2023)

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
          width={500}
          height={300}
          data={transactions?.map(transaction => ({
            ...transaction,
            month: months[transaction.month as number].slice(0, 3)
          }))}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" fontSize={12} />
          <YAxis tickFormatter={value => `$${value}`} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="expense" stroke="#82ca9d" />
          <Line type="monotone" dataKey="income" stroke="#005377" activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
  )
}
