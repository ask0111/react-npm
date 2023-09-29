import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';
import io from 'socket.io-client';
import {nanoid} from 'nanoid';

const socket = io.connect("http://localhost:5000");
const userName = nanoid(4);

function App() {
  const [message, setMessage] = useState('')
  const [chat, setChat] = useState([])

  const sendChat = (e)=>{
    e.preventDefault();
    socket.emit('chat', {message, userName}, ({err})=> {alert(err)})
    setMessage('')
  }


  const socketFun = async()=>{
    await socket.on('chatHistory', (payload)=>{
      setChat(payload);
      console.log(chat, 'hchat')
    })


    await socket.on('chat', (payload)=>{

      setChat((preChat)=> [
        ...preChat.filter((ele)=> ele.timestamp !== payload.timestamp)
        , payload]);

      console.log(payload , 'chat')
    })
    // return () => {
    //   socket.disconnect(); 
      
    // };
  }

  useEffect(()=>{
     socketFun()
  }, [socket])



  return (
    <div className="App">
      <header className="App-header">
       <h1>Chat APP</h1>
       <div className='chatc'>
       {
        chat.map((payload, index)=>{
          return (
            <p key={index}><span>{payload.userName}</span> : {payload.message} </p>
          )
        })
       }
       </div>
       <form onSubmit={(e)=>sendChat(e)}>
        <input 
          type='text'
          name='chat'
          placeholder='send text'
          value={message}
          onChange={(e)=> {setMessage(e.target.value)}}
        />
        <button type='submit'>Send</button>
       </form>
      </header>
    </div>
  );
}

export default App;
