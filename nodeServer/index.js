// Node Server which will handle Socket.io connections

const io = require("socket.io")(8000) // 8000 is the port name

const users = {

};

io.on('connection', socket => {
    socket.on('new-user-joined', name => {
        users[socket.id] = name;
        socket.broadcast.emmit('user-joined', name)
    })
})