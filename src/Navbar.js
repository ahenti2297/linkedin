import './Navbar.css';
import logo from './assets/LinkedIn_logo.png';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import PeopleIcon from '@mui/icons-material/People';
import SmartDisplayOutlinedIcon from '@mui/icons-material/SmartDisplayOutlined';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import LaptopIcon from '@mui/icons-material/Laptop';
import Button from '@mui/material/Button';
export default function Navbar(){
    return(
        <div className="cont">
            <div className="LinkedInLo">
             <img src={logo} alt="logo_img"/>
            </div>        
            <div className="NavbarTools">
             <div className="artProp">
               <NewspaperIcon width={20}/>
                <p>Articles</p>
             </div>
             <div className="peopProp">
                <PeopleIcon/>
                <p>People</p>
             </div>
             <div className="learnProp"> 
             <SmartDisplayOutlinedIcon/>   
                <p>Learning</p>
             </div>
             <div className="jobProp">
             <BusinessCenterIcon/>
             <p>Job</p>
            </div>
            <div className="getApp">
             <LaptopIcon/>
             <p>Get the app</p>
            </div> 
            <div className="join-btn">
            <Button variant="text">Join Now</Button>
            </div>
            <div className="sign-in">
            <Button variant="outlined">Sign In</Button>
            </div>
           </div>
        </div>               
    );
};