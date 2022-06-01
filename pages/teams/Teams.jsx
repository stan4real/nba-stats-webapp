import Tablex from "../../components/Charts/Tablex"
import Navbar from "../../components/navbar/Navbar"
import Sidebar from "../../components/sidebar/Sidebar"
import Widget from "../../components/widget/Widget"
import "./Teams.scss"


const Teams = () => {
  return (
    <div className = "home">
        <Sidebar/>
        <div className="homeContainer">
            <Navbar/>
            <div className="widgets">
                <Widget type="yesterday"/>
                <Widget type= "tomorrow"/>
            </div>
            <Tablex/>
        </div>
      </div>
  )
}

export default Teams