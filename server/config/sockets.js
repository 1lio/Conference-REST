let clients = 0;

// Configure sockets from this file
// TODO: Разобраться с сокетами

const connectSocket = (io) => {

    io.on('connection', (socket) => {
        clients++;
        console.log('client connected: ' + socket.id + ' count clients: ' + clients);

        socket.emit('broadcast', {description: clients + ' clients connected!'});
        socket.on('disconnect', () => {
            clients--;
           io.sockets.emit('broadcast', {description: clients + ' clients connected!'})
        })
    })

};

const broadcastUpdateIO = (data) => {};

module.exports = {connectSocket, broadcastUpdateIO};
