import { Link } from "react-router-dom";

export default function Customers(){
    return(
        <>
            <div><h1>Customers Page</h1></div>
            
            <div className="comingSoon">
                <img src="../pictures/coming-soon.jpg" alt="coming soon" width="300" height="300"></img>
                <Link to="/Products">Back to Products</Link> 
            </div>
        </>
    )
}