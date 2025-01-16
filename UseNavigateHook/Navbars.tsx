import { Link, NavLink } from "react-router-dom";


const Navbars=()=>{
    return(
        <>
        <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
        </>
    )
}
export default Navbars;