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
            label: 'of Votes',
            data: [30, 10, 20, 20],
            backgroundColor: [
              '#16a34a',
              '#2563eb',
              '#f97316',
              '#9333ea',
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
    <div className='bg-slate-50 dark:bg-slate-700 p-8 rounded-lg shadow-lg'>
        <h2 className='text-xl text-slate-800 dark:text-slate-50 font-bold mb-4'>Best Selling Charts</h2>
        <div className="p-4 flex items-center justify-center">
            <Pie data={data}/>
        </div>
    </div>
  )
}
