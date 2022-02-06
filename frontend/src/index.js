import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import Board from './components/Board';
import Login from './components/Login';
import Register from './components/Register';
import 'bootstrap/dist/css/bootstrap.min.css';

function getToken() {
  const tokenString = localStorage.getItem('token');

  return JSON.parse(tokenString)
}

function App() {
  const [token, setToken] = useState(() => getToken());

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={!token ? <Navigate to="/login" /> : <Board token={token} />}/>



        <Route path="/login" element={<Login setToken={setToken} />}/>



        <Route path="/register" element={<Register setToken={setToken} />}/>



      </Routes>
    </BrowserRouter>
  )
}

ReactDOM.render(
    <App />,
  document.getElementById('root')
);


