import './Lineminicharts.scss'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

 
const Lineminicharts = (foals) => {
    const [datax2,setDatax2]=useState([])

    useEffect(() => {
      axios.get('https://free-nba.p.rapidapi.com/stats?seasons[]=2020&page='+foals.foals+'=&per_page=30&player_ids=&dates=&game_ids=', {
      headers:{
          'X-RapidAPI-Host': 'free-nba.p.rapidapi.com',
          'X-RapidAPI-Key': 'b0644f67b5msh255b72e332085b3p106b2ajsn6220bb6c6f02'
        }
      }).then(response => setDatax2(response.data.data))
      
      .catch(err => {
        console.log(err)
      })
    }, [foals])
  
  
   

    let minichartdata = datax2.map(function(dity){
        return{ ast:dity.ast, blk:dity.blk, fga:dity.fga, fgm:dity.fgm, fta:dity.fta, ftm:dity.ftm, dreb:dity.dreb, oreb:dity.oreb };
                })

  return (
     
      <div>
    
        <LineChart width={260} height={120} data={minichartdata}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" interval="preserveEnd" />
          <YAxis interval="preserveEnd" />
          <Legend />
          <Line type="monotone" dataKey="ast" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="blk" stroke="#82ca9d" />
        </LineChart>

        <LineChart width={260} height={120} data={minichartdata}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" interval="preserveStart" />
          <YAxis interval="preserveStart" />
          <Legend />
          <Line type="monotone" dataKey="fga" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="fgm" stroke="#82ca9d" />
        </LineChart>

        <LineChart width={260} height={120} data={minichartdata}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" interval="preserveStartEnd" />
          <YAxis interval="preserveStartEnd" />
          <Legend />
          <Line type="monotone" dataKey="fta" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="ftm" stroke="#82ca9d" />
        </LineChart>

        <LineChart width={260} height={120} data={minichartdata}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" interval={0} angle={30} dx={20} />
          <YAxis />
          <Legend />
          <Line type="monotone" dataKey="dreb" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="oreb" stroke="#82ca9d" />
        </LineChart>
      </div>
  )
}

export default Lineminicharts


