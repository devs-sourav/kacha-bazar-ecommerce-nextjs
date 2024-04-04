'use client'
import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);


export default function BestSellingProductsChart() {
    const data = {
        labels: ['Cabbage', 'Watermalon', 'Brocolli', 'Maize'],
        datasets: [
          {
            label: '# of Votes',
            data: [30, 10, 20, 20],
            backgroundColor: [
              '#61e56f',
              '#6a9aed',
              '#ed6a6a',
              '#d16ff8',
            ],
            borderColor: [
              '#fff',
              '#fff',
              '#fff',
              '#fff',
            ],
            borderWidth: 1,
          },
        ],
      };
  return (
    <div className='bg-slate-700 p-8 rounded-lg'>
        <h2 className='text-xl font-bold mb-4'>Best Selling Charts</h2>
        <div className="p-4 flex items-center justify-center">
            <Pie data={data}/>
        </div>
    </div>
  )
}
