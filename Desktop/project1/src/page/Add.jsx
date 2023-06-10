import { useState } from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Routes, Route, Link } from 'react-router-dom';

function Login() {
  const [Number, setNumber] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // 로그인 처리를 하는 코드 작성
    console.log(`Email: ${Number}, Password: ${password}`);
  }

  return (
    <div className="form-container" style={{ marginTop: '200px' }}>
      <Link to='/'>
          <div style={{position: 'absolute', top: '4%', left: '12%', transform: 'translate(-50%, -50%)', color: 'black', fontSize: '1rem', cursor: 'pointer'}}>Brain Wheel</div>
        </Link>
        

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="label">시리얼번호</label>
          <input type="Number" className="input" value={Number} onChange={(event) => setNumber(event.target.value)} />
        </div>
        <div className="form-group">
          <label className="label">장애인등록번호</label>
          <input type="Password" className="input" value={password} onChange={(event) => setPassword(event.target.value)} />
        </div>
        <button type="submit" className="button" style={{ backgroundColor: 'green', color: 'white' }}>완료</button>
      </form>
      <div style={{display: 'flex', justifyContent: 'center', marginTop: '20px'}}>
        
      </div>
    </div>
  );
}

export default Login;
