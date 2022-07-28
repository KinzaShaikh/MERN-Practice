import React from 'react'
import {Routes, Route, BrowserRouter as Router} from 'react-router-dom'
import AddProduct from './AddProduct'
import DisplayProducts from './DisplayProducts'
import Home from './Home'
import Nav from './Nav'

export default function App() {
  return (
    <div>
   <Router>
     <Nav/>
     <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/addProduct' element={<AddProduct/>}/>
       <Route path='/displayProducts' element={<DisplayProducts/>}/>
     </Routes>
   </Router>
   </div>
  )
}
