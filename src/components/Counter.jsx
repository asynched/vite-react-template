import React from 'react'
import { useBox } from 'blackbox.js'

import { counterBox, counterMutations } from '@/contexts/counter'

export default function Counter() {
  const counter = useBox(counterBox)

  return (
    <div className="mb-16 flex flex-col items-center">
      <p className="mb-4 text-lg tracking-tight">Current counter</p>
      <h1 className="mb-4 text-4xl">{counter.counter}</h1>
      <div className="grid grid-cols-2 gap-4">
        <button
          className="py-2 px-4 bg-purple-600 text-sm text-white rounded transition ease-in-out hover:bg-purple-700"
          onClick={counterMutations.decrement}
        >
          Decrement
        </button>
        <button
          className="py-2 px-4 bg-purple-600 text-sm text-white rounded transition ease-in-out hover:bg-purple-700"
          onClick={counterMutations.increment}
        >
          Increment
        </button>
      </div>
    </div>
  )
}
