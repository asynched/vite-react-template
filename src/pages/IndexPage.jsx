import React from 'react'

import Heading from '@/components/ui/Heading'
import Counter from '@/components/Counter'
import DependenciesList from '@/components/DependenciesList'

export default function IndexPage() {
  return (
    <main className="mx-auto w-[80%] max-w-screen-sm min-h-screen flex flex-col justify-center text-gray-700">
      <Heading />
      <Counter />
      <DependenciesList />
    </main>
  )
}
