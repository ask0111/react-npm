const app = require('express')()
require('./DB/db.js')
const server = require('http').createServer(app);
const Modal = require('./DB/schema.js')

const io = require('socket.io')(server, {
    cors: "http://localhost:3001"
});

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

server.listen(5000, ()=>{
    console.log('server connected on 5000...')
})