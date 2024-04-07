import CustomDataTable from '@/components/backend/CustomDataTable'
import DashboardChart from '@/components/backend/DashboardChart'
import Heading from '@/components/backend/Heading'
import LargeCards from '@/components/backend/LargeCards'
import SmallCards from '@/components/backend/SmallCards'
import React from 'react'

export default function page() {
  return (
    <div>
      <Heading title='Dasboard Overview'/>
      {/* Large Cards */}
      <LargeCards/>
      {/* Small Cards */}
      <SmallCards/>
      {/* Charts */}
      <DashboardChart/>
      {/* Recent */}
      {/* <CustomDataTable/> */}
    </div>
  )
}
