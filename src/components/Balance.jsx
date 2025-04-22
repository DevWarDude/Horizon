import { Plus } from 'lucide-react'
import React from 'react'

function Balance() {
  return (
    <div className="border-[1px] border-gray-200 px-2 py-4 rounded-lg flex  justify-between items-end text-nowrap  bg-white shadow-sm  dark:border-slate-700 dark:bg-slate-900">
    <div className="flex gap-2 items-center">
      <div className="bg-blue-200 h-[70px] w-[70px] rounded-full flex items-center justify-center dark:bg-slate-100">
        <div className="bg-white dark:bg-slate-900 h-12 w-12 rounded-full"></div>
      </div>
      <div className="flex gap-1 flex-col">
        <p className="font-semibold">No Bank account linked</p>
        <span>Total Current Balance</span>
        <h1 className="font-bold text-xl ">$500.00</h1>
      </div>
    </div>
    <div className="text-sky-500 flex items-center gap-1 ">
      <Plus />
      <div className="">Add Funds</div>
    </div>
  </div>
  )
}

export default Balance