import { Link } from "react-router-dom";

export default function Navigation()
{
    return (
       
        
        <div id="navigation">
            
            <span id="heared">Online Shop Admin |</span>
            <Link to="/Products" className="navLink">Products</Link> 
            <Link to="/Customers" className="navLink">Customers</Link> 
            <Link to="/Orders" className="navLink">Orders</Link> 
            <Link to="/Reports" className="navLink">Reports</Link>   
        </div>
  
    )
}