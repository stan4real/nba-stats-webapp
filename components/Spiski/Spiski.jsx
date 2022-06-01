import "./Spiski.scss"
import React, { useEffect, useState } from 'react'
import appi from "../api/appi"
import Select from 'react-select'
import Barchart from "../Charts/Barchart"
import Lineminicharts from "../Charts/Lineminicharts"
import axios from 'axios'

const Spiski = () => {

  const [Teamid, setTeamid] = useState([]); 
  const [teams, setTeams] = useState('Knicks')
  const onChange = (e)=>{
    setTeams(e.label)
    }


  useEffect(() => {
      appi.get('/teams').then(response => {setTeamid(response.data.data);
})}, [])

//console.log(Objdata)

let options = Teamid.map(function (city) {
  return { value: city.abbreviation, label: city.name  };
})
  return (
    <div className="container">
                {/* <div className="spisok">
                {Teamid.map((item) =>
                <li  key={item.id} >{item.city}
                </li>
                )}</div>*/}
        <div className="selh2">
          <div className="selector">
                <Select   onChange={onChange}  options={options}/>
          </div>
          <h2 className="title1">NBA Team stats per season </h2>
        </div>
        <div className="squads">
          <Barchart  selv={teams} />
        </div>
          <div className="hints">
            <marquee behavior="scroll" direction="left" className="scrolli"> AST - assists.
              STL - steals.
              BLK - blocks.
              DREB - Defensive rebounds.
              FGM - Field goals made.
              3FGM - Three-point field goals made.
              3FGMA - Three-point field goals attempted.
              FTM - Free throws made.
              FTA - Free throws attempted.</marquee>
          </div>
    </div>
  )
}

export default Spiski