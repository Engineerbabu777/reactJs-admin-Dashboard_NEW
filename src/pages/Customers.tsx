



import React from 'react'
import AdminSidebar from '../components/AdminSidebar'

type Props = {}

export default function Customers({}: Props) {
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