import React from "react";
import { BuildingShop24Regular } from '@fluentui/react-icons';
import { NavLink } from 'react-router-dom';
import { useCart } from "../../../context/CartContext";


function CartIcon() {
    const { cartQtd } = useCart();
    return(
        <NavLink to={`/checkout`} className="relative">
            <span className="absolute top-[-5px] right[-5px] text-xs bg-red-600 rounded-full h-4 w-4 text-center text-white">{cartQtd()}</span>
            <BuildingShop24Regular className="w-8 h-8"/>
        </NavLink>
        
    )
}

export default CartIcon;