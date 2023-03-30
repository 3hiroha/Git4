import "./Navbar.css";
import { NavLink } from "react-router-dom";
function Navbar(){
    return(
            <div>
                <h1 className="task">Tasks</h1>
                <nav>
                    {/* Incoming */}
                    <NavLink replace to="/todo" className="inactive-link">
                    {({ isActive}) =>
                        isActive ? (
                            <li className="active-link">Incoming</li>
                        ) : (
                            <li>Incoming</li>
                        )
                    
                    }




                    </NavLink>
                    {/* Today */}
                    <NavLink replace to="/today" className="inactive-link">
                    {({ isActive}) =>
                        isActive ? 
                            <li className="active-link">Today</li> : <li>Today</li>
                        }
                    </NavLink>
                    {/* Calender */}
                    
                    <NavLink replace to="/calender" className="inactive-link">
                    {({ isActive}) =>
                        isActive ? (
                            <li className="active-link">Calender</li>
                        ) : (
                            <li>Calender</li>
                        )
                    
                    }




                    </NavLink>
                    
                </nav>
            </div>
                
    )
}
export default Navbar;