
import "./menu.scss";
import Navbar from '../navbar/Navbar';
import Sidebar from '../sidebar/Sidebar';



const Menu = () => {
  return (
    <div className='menu'>
       <Sidebar/>
     
      <div className="menucontainer">
        <Navbar />
        menu items


      </div>
       
        
        
    </div>
  )
}

export default Menu