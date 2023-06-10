import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Topbar from '../components/Topbar';
import Loading from '../components/Loading';

function Learning() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div>
      <Topbar handleRefresh={handleRefresh} text="학습모드" />
      <Loading/>
      
      

      {/* 이후 컴포넌트의 나머지 부분 */}
    </div>
  );
}

export default Learning;
