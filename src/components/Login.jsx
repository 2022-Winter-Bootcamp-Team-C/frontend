import React from 'react';
import LoginButton from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";
import './Login.css';




    

function BasicExample() {
    const navigate = useNavigate();
   
  return (

    <div className="ml">
        
    <Form>
    <h1>LOGIN</h1>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>이메일</Form.Label>
        
        <Form.Control type="email" placeholder="이메일" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>비밀번호</Form.Label>
        <Form.Control type="password" placeholder="비밀번호" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
      </Form.Group>
      

      
      <LoginButton variant="primary">로그인</LoginButton>{' '}
      <LoginButton variant="primary" onClick={() => { navigate('/signup'); }}>
            회원가입
        </LoginButton>{''}
     
    </Form>
    </div>
  );
}



export default BasicExample;