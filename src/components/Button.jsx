import React from 'react'
import { useNavigate } from "react-router-dom";
import "./Button.css"

const Button = () => {
  const navigate = useNavigate();
  const navigateToMove = () => {
    navigate("/login");
    
  };

    
  return (
    <div className='button_position'>
        <button className="button_style" onClick={navigateToMove}>시작하기</button> 
          
    </div>
    )
  }
export default Button;