import React from "react";
import { NavLink } from 'react-router-dom';
function Navbar() {
    return(
        <ul className="flex gap-5 text-slate-800 font-semibold">
            <li>
                <NavLink to="/about" className={( { isActive}) => (isActive ? "text-stone-600" : "")}>Sobre</NavLink>
            </li>
            <li>
                <NavLink to="/orders" className={( { isActive}) => (isActive ? "text-stone-600" : "")}>Pedidos Especiais</NavLink>
            </li>
        </ul>
    )
}
export default Navbar;