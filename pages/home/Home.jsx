import "./home.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Widget from "../../components/widget/Widget"
import Spiski from "../../components/Spiski/Spiski"
import React, { useEffect, useState } from 'react'
import Barchart from "../../components/Charts/Barchart"
import Lineminicharts from "../../components/Charts/Lineminicharts"
import Tablex from "../../components/Charts/Tablex"
//import appi from "../api/appi"

const Home = () => {


return (
    
    <div className = "home">
        <Sidebar/>
        <div className="homeContainer">
            <Navbar/>
            <div className="widgets">
                <Widget type="yesterday"/>
                <Widget type= "tomorrow"/>
            </div>
            <div className="spisoknchart">
            </div>
            <div>
            <Tablex/>
            </div>
        </div>

    </div>

)
}
export default Home