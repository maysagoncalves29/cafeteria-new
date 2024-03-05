import React from 'react';
import Logo from '../../assets/logo.jpg'
import '../Header/index.css'
import Navbar from '../Navbar';
import CartIcon from './CartIcon';
import { PersonCircle24Regular } from '@fluentui/react-icons';
import Button from '../Button';


function Header(){
    return(
        <div className='flex justify-between items-center px-12 py-5 rounded-b-lg bg-stone-400'>
            <Navbar/> 
            <div>
            <h3 className='text-2x1 font-bold'>Cafeteria Goncalves</h3>
            <img src={Logo} className="header-cafe" alt="Logo da Empresa"/>
            </div>
            <div className='flex gap-5 items-center'>
            <Button className="bg-amber-900 rounded px-3 py-2 text-slate-50 font-semibold text-sm cursor-pointer hover:bg-amber-800">
                <span className='mr-2'>Faça login ou Cadastre-se</span>
            <PersonCircle24Regular/>
            </Button>
            <CartIcon/>
            </div>
           
            
        </div>
    )
}
export default Header;