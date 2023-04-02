import { Link, Outlet } from "react-router-dom";
import Navigation from "./Navigation";

export default function Layout()
{
    return (
        <>
            
            <nav>
                <Navigation/>
            </nav>
            <hr/>
            
            <div id="content">
                <Outlet/>
            </div>

            <hr/>
            <footer id="footer">
            &copy; - 2022 Online Shop Admin - <Link>Privacy</Link>
            </footer>
        </>
    )
}
