import React from "react";
import { Routes , Route} from 'react-router-dom';
import Header from "../components/Header";

import Checkout from "../pages/Checkout";
import Orders from "../pages/Orders";
import About from "../pages/About";

function Router() {
    return(
        <>
        <Header/>
        <Routes>
            <Route exact path="/about" element={ <About/> }/>
            <Route exact path="/:filter?" element={ <About/> }/>
            <Route exact path="/checkout" element={ <Checkout/> }/>
            <Route exact path="/orders" element={ <Orders/> }/>
        </Routes>
        </>
    )
}
export default Router;