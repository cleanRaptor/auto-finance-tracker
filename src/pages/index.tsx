import Head from 'next/head'
import IncomeList from '../components/IncomeList'
import ExpenseList from '../components/ExpenseList'

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>Finance Tracker</title>
      </Head>
      <h1 className="text-3xl font-bold">Personal Finance Tracker</h1>
      <IncomeList />
      <ExpenseList />
    </div>
  )
}
