
import React from 'react'


import PageHeader from '@/components/backend/PageHeader'
import TableActions from '@/components/backend/TableActions'

export default function page() {
  return (
    <div>
      {/* Header */}
      <PageHeader title="Categories" LinkTitle="Add Categories" href="/dashboard/categories/new"/>
      {/* Export Part Here */}
      <TableActions/>
      {/* Table */}
      <div className="py-6">
        <h2>Categories</h2>
      </div>
    </div>
  )
}
