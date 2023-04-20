import Navbar from "../../components/navbar/Navbar"
import Sidebar from "../../components/sidebar/Sidebar"
import Spiski from "../../components/Spiski/Spiski"
import Widget from "../../components/widget/Widget"
import "./Stats.scss"



const Stats = () => {


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
                <Spiski/>
            </div>
        </div>
      </div>
  )
}

export default Stats