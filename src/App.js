import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Component/Home/Home';
import Navbar from './Component/Navbar/Navbar';
import Veg from './Component/veg/Veg';
import { DispatchHook } from './CoustomHook/DispatchHook/DispatchHook';
import { Cart } from './Pages/CartPage/Cart';
import Items from './Pages/ItemPage/Items';
import { fetchAllProducts } from './Redux/Actions/actions';

function App() {
  const dispatch = useDispatch()
  const {loading}=DispatchHook()

  useEffect(()=>{
    dispatch(fetchAllProducts())
  },[])

  
  if(loading){
    return (
      <div>
        ...Loading
      </div>
    )
  }

  return (
    <div >
      {/* Mohaprobhu */}
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/veg' element={<Veg/>}/>
        <Route path="/addToCart" element={<Cart/>}/>
        <Route path='/product/:itemId' element={<Items/>} />
      </Routes>
    </div>
  );
}

export default App;
