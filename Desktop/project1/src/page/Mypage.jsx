import React from 'react';
import Topbar from '../components/Topbar';
import ButtonContainer from '../components/ButtonContainer';
import DeviceContainer from '../components/DeviceContainer';
import Button from '../components/Button';
import '../css/DeviceContainer.css';

function Mypage() {
  const handleRefresh = () => {
    window.location.reload();
  };


  return (
    <div>
      <div>
        <Topbar handleRefresh={handleRefresh} text="My page" />
      </div>
      <div className="profile">
        {/* <h2>프로필</h2> */}
        {/* 프로필 내용을 추가하세요 */}
      </div>
      <ButtonContainer/>
      <DeviceContainer/>
      <Button/>
      </div>
  
  );
}

export default Mypage;
