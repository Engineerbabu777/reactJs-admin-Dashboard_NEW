import { Suspense, lazy, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
const Dashboard = lazy(() => import('./pages/Dashboard'))
const Customers = lazy(() => import('./pages/Customers'))
const Products = lazy(() => import('./pages/Products'))
const Transactions = lazy(() => import('./pages/Transactions'))

function App () {
  return (
    <>
      <Router>
        <Suspense fallback={'loading...'}>
          <Routes>
            <Route path='/admin/dashboard' Component={Dashboard} />
            <Route path='/admin/product' Component={Products} />
            <Route path='/admin/customer' Component={Customers} />
            <Route path='/admin/transaction' Component={Transactions} />

            {/* CHARTS! */}

            {/* APPS */}
          </Routes>
        </Suspense>
      </Router>
    </>
  )
}

export default App
