import React, {useEffect} from 'react';
import { useMediaQuery } from "react-responsive"
import { Routes, Route, useNavigate } from 'react-router-dom';

import Index from './pages/index'
import Login from './pages/login'
import './index.css';

function App() {

const navigate = useNavigate();
const isPc = useMediaQuery({ query: "(min-width: 1024px)" });
const isLaptop = useMediaQuery({ query: "(min-width: 768px)" });
const perPageSize = isPc ? "pc" : isLaptop ? "laptop" : "mobile";

useEffect(() => {
  navigate('/')
}, []);

  return (
    // <div className="App">
    // <Index/>
    //       {/* {perPageSize}
    //       {isPc && <Index />} */}
    // </div>

      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
      </Routes>
  );
}

export default App;
