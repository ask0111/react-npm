import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';
import io from 'socket.io-client';
import {nanoid} from 'nanoid';
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import ChatApp from './componetns/sockets/ChatApp';
import BidsApp from './componetns/sockets/BidsApp';
import BidsRoom from './componetns/sockets/BidsRoom';




function App() {
  
  return(<>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<h1>Home Page</h1>} />
        <Route path='/chat-app' element={ <ChatApp /> } />
        <Route path='/bids-app' element={<BidsApp /> } />
        <Route path='/bids-room' element={<BidsRoom /> } />
      </Routes>
    </BrowserRouter>
  </>)}

export default App;
