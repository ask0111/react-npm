const app = require('express')()
require('./DB/db.js')
const server = require('http').createServer(app);
const {Modal, UserModal } = require('./DB/schema.js')

const io = require('socket.io')(server, {
    cors: "http://localhost:3001"
});


let clients = [];


io.on('connection', (socket)=>{

    UserModal.find().sort({ timestamp: 'asc' }).then((users)=>{
        clients[0] && (clients = users);
    }).catch((error)=>{
        console.log('This is a error', error);
    })

    socket.on('userID', ({userId}, callback)=>{
        let check = 0;
        clients.map((client)=> {
            if(client.userId === userId){
                check = 1;
            }
        })
        if(!check){
            client.push({
                userId,
                socket
            });

            const newUser = new UserModal({
                userId,
                socket,
                timestamp: new Date(),
            })

            newUser.save().then(()=>{
                socket.emit('userCreate', newUser)
            })
        }
    });

    socket.on('isCorrectBid', ({userId, bids}, callback)=>{
        
    })
})



io.on('connection', async(socket)=>{
    // console.log('socket', socket);

    await Modal.find().sort({ timestamp: 'asc' }).then((message)=>{
        socket.emit('chatHistory', message);
    }).catch((error)=>{
        console.log('This is a error', error);
    })




    await socket.on('chat', (payload, callback)=>{
        const {message, userName} = payload;

        console.log(socket.id);
        if(!message){
            return callback({'err' : 'type some text!'})
        };

        const newMessage = new Modal({
            message,
            userName,
            timestamp: new Date(),
        });
        
        console.log('This is payload', payload, message, userName);
        
        newMessage.save().then(()=>{
            io.emit('chat', newMessage)
        })
        
    });
    
    // await socket.on('disconnect', () => {
    //     console.log('Client disconnected');
    //   });
})




io.on('connection', (socket) => {
    socket.on('join-room', (roomId) => {
      socket.join(roomId);
      // You can send a confirmation message to the client if needed.
      socket.emit('room-joined', `You have joined room ${roomId}`);
    });


    // socket.on('join-room', (roomID) => {
    //     socket.join(roomId);
    
        socket.on('add-bid', (roomId, bids) => {
          // Handle the bid (e.g., store it in a database or broadcast it to other clients in the room).
          io.to(roomId).emit('new-bid', bids); // Broadcast the bid to all clients in the room.
        });
    //   });


  });
  





server.listen(5000, ()=>{
    console.log('server connected on 5000...')
})