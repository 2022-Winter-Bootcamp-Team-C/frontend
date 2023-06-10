import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import LoginButton from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";
import '../css/Login.css';
import axios from 'axios';


const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const navigateToSignup = () => {
    navigate("/Signup");
  };

  const checkUser = () => {
    axios.post('http://127.0.0.1:8000/api/v1/user/login/',
    {
      email: email,
      password: password,
    })
    .then((response)=> {
      console.log("로그인 성공!");
      alert("로그인을 환영합니다!");
      console.log(response.data)
      localStorage.clear()
      localStorage.setItem('user_id', response.data.user_id)
      localStorage.setItem('email', response.data.email)
            setTimeout(()=> {
              navigate("/dashboard");
            }, 1000);
    })
    .catch(function(error) {
    alert("이메일과 비밀번호를 다시 확인해주세요!")
    console.log("로그인 실패!");
    console.log(error);
    });
  }

  return (

    <div className="ml">
    <Form>
    <h1 style={{
              position: 'absolute',
              marginBottom:'30%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              color: 'black',
              fontSize: '2rem',
              fontWeight: 'bold',
              cursor: 'pointer'
            }} >LOGIN</h1>
      <Form.Group className="mb-1" controlId="formBasicEmail">
        <Form.Label>이메일</Form.Label>
        <Form.Control type="email" placeholder="이메일" onChange={(e)=>{setEmail(e.target.value);}}/>
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-2" controlId="formBasicPassword">
        <Form.Label>비밀번호</Form.Label>
        <Form.Control type="password" placeholder="비밀번호" onChange={(e)=>{setPassword(e.target.value);}}/>
      </Form.Group>
      
      
      <LoginButton variant="primary one" onClick={checkUser}>로그인</LoginButton>{' '}
      <LoginButton variant="primary two" onClick={navigateToSignup}>회원가입</LoginButton>{' '}
      <Link to='/Mypage'>
            <button type="submit" className="button">임시버튼</button>
      </Link>
    </Form>
    </div>
  );
}



export default Login;