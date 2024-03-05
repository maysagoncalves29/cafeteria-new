import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Router from './router';
import CartProvider from './context/CartContext';


function App() {
  //const notify = () => toast('Here is your toast.')
  return (
   <CartProvider>
    <BrowserRouter>
      <Router/>
      <Toaster/>

   </BrowserRouter>
   </CartProvider>
      
        

  );
}

export default App;
