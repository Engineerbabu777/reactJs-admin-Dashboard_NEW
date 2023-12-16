



import React from 'react'
import AdminSidebar from '../components/AdminSidebar'

type Props = {}

function Products({}: Props) {
  return (
    <>

<div className='adminContainer'>
      {/* SIDEBAR! */}
      <AdminSidebar />

      {/* MAIN! */}
      <main>main</main>
    </div>
    </>
  )
}

export default Products