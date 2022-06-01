import './Barchart.scss'

import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Lineminicharts from './Lineminicharts';
 
  const Barchart = (selv) => {
 const [datax, setDatax] = useState([])
 const [page, setPage] = useState(1)

 useEffect(() => {
     axios.get('https://free-nba.p.rapidapi.com/stats?seasons[]=2020&page='+page+'=&per_page=30&player_ids=&dates=&game_ids=', {
     headers:{
         'X-RapidAPI-Host': 'free-nba.p.rapidapi.com',
         'X-RapidAPI-Key': 'b0644f67b5msh255b72e332085b3p106b2ajsn6220bb6c6f02'
       }
     }).then(response => setDatax(response.data.data))
     
     .catch(err => {
       console.log(err)
     })
   }, [page])
 
useEffect(()=>{
 setPage(page+1)
} , [selv])


let data = datax.map(function (pity) {
    return { FG3A: pity.fg3a, FG3M: pity.fg3m, FGM:pity.fgm};
            })

return (

    <div className='containerr'>
        <div className='bar'>
        <BarChart
          width={900}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name"  />
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            interval={0}
            
            height={1}
            scale="band"
            xAxisId="quarter"
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="FG3A" fill="#8884d8" />
          <Bar dataKey="FG3M" fill="#82ca9d" />
          <Bar dataKey="FGM" fill="#FFEFD5" />
        </BarChart>
        </div>
            <div className='mini'>
            <Lineminicharts foals={page}/>

            </div>
            
                
            
    </div>
  )
}

export default Barchart
