

import React from 'react';
import "./donut.scss";
// import { Doughnut } from 'react-chartjs-2'
// import  Chart  from "react-apexcharts";

import { PieChart, Pie } from 'recharts';

const Donut = () => {
  const data = [
    { name: 'Geeksforgeeks', students: 400 },
    { name: 'Technical scripter', students: 700 },
    { name: 'Geek-i-knack', students: 200 },
    { name: 'Geek-o-mania', students: 1000 }
  ];
  return (

    <div className='donut'>
      <div className='top'>
        <h1 className="title" >orders overview</h1>
      </div>
      <div className="chart">
        <PieChart width={500} height={500}>
          <Pie data={data} 
          dataKey="students" 
          outerRadius={250} 
          innerRadius={150} 
          fill="green" />
        </PieChart>


      </div>

    </div>
  );

}

export default Donut