import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Loading from '@/components/ui/Loading'

const IndexPage = React.lazy(() => import('@/pages/IndexPage'))

export default function Router() {
  return (
    <React.Suspense fallback={<Loading />}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IndexPage />} />
        </Routes>
      </BrowserRouter>
    </React.Suspense>
  )
}
