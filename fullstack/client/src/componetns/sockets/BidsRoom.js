import React, { useState } from 'react';
import io from 'socket.io-client';

const socket = io.connect('http://localhost:5000')

const BidsRoom = () => {
    const [roomId, setRoomId] = useState('');
    const [bids, setBids] = useState('');
    const [ans, setAns] = useState('');

    
    
    const RoomHandler = ()=>{
        socket.emit('join-room', roomId);
    }

    const BidsHandler = ()=>{
        socket.emit('add-bid', {roomId, bids})
        socket.on('new-bid', (bid) => {
            // Handle displaying the new bid on the client UI.
            setAns(bid)
        console.log('New Bid:', bid);
        });
    }

    return (
        <div><div>
            <input
                type='text'
                onChange={(e)=> setRoomId(e.target.value)}
            ></input>
            <button onClick={()=> RoomHandler()}>add user</button>

        </div>
            <div>
                <input 
                    type='text'
                    onChange={(e)=> setBids(e.target.value)}
                    placeholder='bids'
                />
                <button onClick={()=> BidsHandler()}>bids</button>
            </div>
            <p>a{ans}</p>
        </div>
    );
};

export default BidsRoom;