
import React from 'react'


import PageHeader from '@/components/backend/PageHeader'
import TableActions from '@/components/backend/TableActions'

export default function page() {
  return (
    <div>
      {/* Header */}
      <PageHeader title="Products" LinkTitle="Add Products" href="/dashboard/products/new"/>
      {/* Export Part Here */}
      <TableActions/>
      {/* Table */}
      <div className="py-6">
        <h2>Products Table</h2>
      </div>
    </div>
  )
}
