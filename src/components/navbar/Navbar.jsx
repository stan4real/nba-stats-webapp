import "./Navbar.scss"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import GTranslateOutlinedIcon from '@mui/icons-material/GTranslateOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input placeholder="Search..."></input>
          <SearchOutlinedIcon/>
        </div>
          <div className="items">
            <div className="item">
              <GTranslateOutlinedIcon className="icon"/>
              English
            </div>
            <div className="item">
              <DarkModeOutlinedIcon className="icon-orange"/>
            </div>
            <div className="item">
              <NotificationsNoneOutlinedIcon className="icon"/>
            </div>
            <div className="item">
              <AccountBoxOutlinedIcon className="icon"/>
            </div>
      
        </div>
      </div>
    </div>
  )
}

export default Navbar