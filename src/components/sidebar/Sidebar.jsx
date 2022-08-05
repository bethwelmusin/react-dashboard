import "./sidebar.scss";
import GridViewIcon from '@mui/icons-material/GridView';
import MenuIcon from '@mui/icons-material/Menu';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import RateReviewIcon from '@mui/icons-material/RateReview';
import MessageIcon from '@mui/icons-material/Message';
import PersonOutlineIcon from "@mui/icons-material/PersonOutline"
import QrCode2Icon from '@mui/icons-material/QrCode2';
import SummarizeIcon from '@mui/icons-material/Summarize';
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { Link } from "react-router-dom";


const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Dagizo</span>
        </Link>
      </div>
      <hr />



      <div className="center">
        <ul>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <GridViewIcon className="icon" />
              <span>Dashboard</span>
            </li>
          </Link>
          <Link to="/menu" style={{ textDecoration: "none" }}>
            <li>
              <MenuIcon className="icon" />
              <span>Menu</span>
            </li>
          </Link>

          <Link to="/orders" style={{ textDecoration: "none" }}>
            <li>
              <FactCheckIcon className="icon" />
              <span>Orders</span>
            </li>
          </Link>

          <Link to="/feedback" style={{ textDecoration: "none" }}>
            <li>
              <RateReviewIcon className="icon" />
              <span>Feedback</span>
            </li>
          </Link>

          <Link to="/messages" style={{ textDecoration: "none" }}>
            <li>
              <MessageIcon className="icon" />
              <span>Messages</span>
            </li>
          </Link>
          <Link to="/Customers" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Customers</span>
            </li>
          </Link>
          <Link to="/QR code" style={{ textDecoration: "none" }}>
            <li>
              <QrCode2Icon className="icon" />
              <span>QR code</span>
            </li>
          </Link>

          <Link to="/Reports" style={{ textDecoration: "none" }}>
            <li>
              <SummarizeIcon className="icon" />
              <span>Reports</span>
            </li>
          </Link>
         
          <li>
            <SettingsApplicationsIcon className="icon" />
            <span>Settings</span>
          </li>
        
          
          <li>
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
     
    </div>
  );
};

export default Sidebar;
