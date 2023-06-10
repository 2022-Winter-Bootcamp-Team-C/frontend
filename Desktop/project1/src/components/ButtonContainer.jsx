import React from 'react';
import { Link } from 'react-router-dom';
import '../css/ButtonContainer.css';

function ButtonContainer() {
  return (
    <div
      className="buttonContainer"
    >
      <Link to="/Learning">
        <button
          type="submit"
        
        >
          학습모드
        </button>
      </Link>
      <Link to="/Using">
        <button
          type="submit"
          
        >
          사용모드
        </button>
      </Link>
    </div>
  );
}

export default ButtonContainer;
