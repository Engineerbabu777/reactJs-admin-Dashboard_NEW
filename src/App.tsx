import { Suspense, lazy, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
const Dashboard = lazy(() => import('./pages/Dashboard'))
const Customers = lazy(() => import('./pages/Customers'))
const Products = lazy(() => import('./pages/Products'))
const Transactions = lazy(() => import('./pages/Transactions'))
const NewProduct = lazy(() => import('./pages/management/NewProduct'))
const ProductManagement = lazy(() =>
  import('./pages/management/ProductManagement')
)
const TransactionManagement = lazy(() =>
  import('./pages/management/TransactionManagement')
)


const BarCharts = lazy(() => import("./pages/charts/BarCharts"));
const LineCharts = lazy(() => import("./pages/charts/LineCharts"));
const PieCharts = lazy(() => import("./pages/charts/PieCharts"));

const Stopwatch = lazy(() => import("./pages/apps/Stopwatch"));
const Coupon = lazy(() => import("./pages/apps/Coupon"));
const Toss = lazy(() => import("./pages/apps/Toss"));

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
            {/* Charts */}

            <Route path='/admin/chart/bar' element={<BarCharts />} />
            <Route path='/admin/chart/pie' element={<PieCharts />} />
            <Route path='/admin/chart/line' element={<LineCharts />} />

            {/* Apps */}

            <Route path='/admin/app/stopwatch' element={<Stopwatch />} />
            <Route path='/admin/app/coupon' element={<Coupon />} />
            <Route path='/admin/app/toss' element={<Toss />} />

            {/* MANGEMENT! */}
            <Route path='/admin/product/new' element={<NewProduct />} />
            <Route path='/admin/product/:id' element={<ProductManagement />} />
            <Route
              path='/admin/transaction/:id'
              element={<TransactionManagement />}
            />
          </Routes>
        </Suspense>
      </Router>
    </>
  )
}

export default App
