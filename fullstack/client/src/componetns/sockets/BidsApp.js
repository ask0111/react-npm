import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = io.connect('http://localhost:5000')

const BidsApp = () => {
    const [bids, setBids] = useState(0);
    const [showBids, setShowBids] = useState(100);
    const [userId, setUserId] = useState('');
    const [isUser, setIsUser] = useState(false);

    const BidsHandler = (e) => {
        e.preventDefault()
        if(bids && bids < showBids){
            setShowBids(bids)
            socket.emit('isCorrectBid', {userId, bids}, ({err})=>{
                alert('Its not currect bids')
            })
        }
    }

    const userIdHandler = (e) => {
        e.preventDefault()
        if(userId){
            setIsUser(!isUser)
            socket.emit('userID', {userId}, ({err})=>{
                alert('something wrong!')
            });
        }

    }

    useEffect(() => {
        socket.on('userCreate', (newUser)=>{
            alert('new user connected');
        })
    },[])



    return (
        <div className='App'>
            <h1>This is Bids Page</h1>
            {
                !isUser ?
                    <div >
                        <input
                            type="text"
                            placeholder='User ID'
                            onChange={(e) => setUserId(e.target.value)}
                        />
                        <button onClick={userIdHandler} type='submit'>Submit User ID</button>
                    </div> :

                    <form onSubmit={BidsHandler} >
                        <input
                            type="text"
                            placeholder='bids'
                            onChange={(e) => setBids(e.target.value)}
                        />
                        <button type='submit'>Submit Bids</button>
                    </form>
            }


            <p>{showBids}</p>
        </div>
    );
};

export default BidsApp;