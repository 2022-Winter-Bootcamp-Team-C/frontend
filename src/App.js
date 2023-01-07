import React from 'react';
import Index from './pages/index'
import Login from './pages/login'
import { useMediaQuery } from "react-responsive"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';

function App() {

const isPc = useMediaQuery({ query: "(min-width: 1024px)" });
const isLaptop = useMediaQuery({ query: "(min-width: 768px)" });
const perPageSize = isPc ? "pc" : isLaptop ? "laptop" : "mobile";

  return (
    <div className="App">
    
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Index/>}/>
        <Route path='login' element={<Login/>}/>
      </Routes>
    </BrowserRouter>
          {/* {perPageSize}
          {isPc && <Index />} */}

    </div>
  );
}

export default App;
