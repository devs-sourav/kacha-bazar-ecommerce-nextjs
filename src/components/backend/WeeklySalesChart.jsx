'use client'
import React, { useState } from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

import { faker } from '@faker-js/faker';




export default function WeeklySalesChart() {

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' ,
      },
      title: {
        display: false,
        text: 'Chart.js Line Chart',
      },
    },
  };

  const labels = ['1st Week', '2nd Week', '3rd Week', '4th Week'];


  const tabs = [
    {
      title:'Sales',
      type:'sales',
      data:{
        labels,
        datasets: [
          {
            label: 'Sales',
            data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
            borderColor: 'rgb(234, 88, 12)',
            backgroundColor: 'rgba(234, 88, 12, 0.6)',
          },
        ],
      }
    },
    {
      title:'Orders',
      type:'orders',
      data:{
        labels,
        datasets: [
          {
            label: 'Orders',
            data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
            borderColor: 'rgb(22, 163, 75)',
            backgroundColor: 'rgba(22, 163, 75, 0.6)',
          },
        ],
      }
    },
  ]

  const [chartToDisplay,setChartToDisplay] = useState(tabs[0].type)

  return (
    <div className='bg-slate-700 p-8 rounded-lg'>
        <h2 className='text-xl font-bold mb-3'>Weekly Charts</h2>
        <div className="">
          {/* Tabs Here*/}
          <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-100 dark:text-gray-400 dark:border-gray-400">
              <ul className="flex flex-wrap -mb-px">
                {
                  tabs.map((tab,i)=>(
                    <li className="me-2" key={i}>
                      <button onClick={()=>setChartToDisplay(tab.type)} className={chartToDisplay == tab.type ? (chartToDisplay == 'sales' ?
                        
                        "inline-block p-4 text-orange-600 border-b-2 border-orange-600 rounded-t-lg active dark:text-orange-500 dark:border-orange-500"
                        :
                        "inline-block p-4 text-green-600 border-b-2 border-green-600 rounded-t-lg active dark:text-green-500 dark:border-green-500")
                        :
                        "inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-100 hover:border-gray-300 dark:hover:text-gray-100"}>{tab.title}</button>
                    </li>
                  ))
                }
              </ul>
          </div>

          {/* Contents Here */}
          {/* <h2>{item.title} Chart</h2> */}
          {
            tabs.map((item,i)=>(
              (chartToDisplay == item.type) && 
              <div key={i}>
                <h2 className='mt-8 text-[16px]'>{item.title} Chart</h2>
                <Line className='mt-6' options={options} data={item?.data} />
              </div>
            ))
          }
          
        </div>
    </div>
  )
}
