import "./Sidebar.scss";
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import QueryStatsOutlinedIcon from '@mui/icons-material/QueryStatsOutlined';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import FaceIcon from '@mui/icons-material/Face';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import { Link } from "react-router-dom"

const Sidebar = () => {
  return (
    <div className="sidebar">
        <div className="top">
            <Link to="/" style={{textDecoration:"none"}}>
            <span className="logo"><SportsBasketballIcon className="icon-logo"/>NBA club</span>
            </Link>
        </div>
        <hr/>
        <div className="center">
            <ul>
                <li><DashboardIcon className="icon"/><span>Dashboard</span></li>
                <Link to="/teams" style={{textDecoration:"none"}}>
                <li><GroupOutlinedIcon className="icon"/><span>Teams</span></li>
                </Link>
                <Link to="/stats" style={{textDecoration:"none"}}>
                <li><QueryStatsOutlinedIcon className="icon"/><span>Stats</span></li>
                </Link>
                <li><SettingsApplicationsIcon className="icon"/><span>Settings</span></li>
                <li><PsychologyOutlinedIcon className="icon"/><span>Logout</span></li>
            </ul>
        </div>
        <div className="bottom">
            <div className="colorOption"></div>
            <div className="colorOption"></div>
            <div className="colorOption"></div>
        </div>
    </div>
  )
}

export default Sidebar