
import React from 'react'


import PageHeader from '@/components/backend/PageHeader'
import TableActions from '@/components/backend/TableActions'

export default function page() {
  return (
    <div>
      {/* Header */}
      <PageHeader title="Coupons" LinkTitle="Add Coupons" href="/dashboard/coupons/new"/>
      {/* Export Part Here */}
      <TableActions/>
      {/* Table */}
      <div className="py-6">
        <h2>Coupons</h2>
      </div>
    </div>
  )
}
