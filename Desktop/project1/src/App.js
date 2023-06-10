import { Routes, Route } from 'react-router-dom';
import MainPage from './page/MainPage';
import Mypage from './page/Mypage';
import Login from './page/Login';
import Signup from './page/Signup';
import Add from './page/Add';
import Learning from './page/Learning';
import Using from './page/Using';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/Mypage" element={<Mypage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Signup" element={<Signup/>} />
        <Route path="/Add" element={<Add/>}/>
        <Route path="/Learning" element={<Learning/>}/>
        <Route path="/Using" element={<Using/>}/>
      </Routes>
    </div>
  );
}

export default App;
