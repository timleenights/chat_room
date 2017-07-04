import socket from './ws-client';

class ChatApp {
  constructor () {
    socket.init('ws://localhost:3001');
    socket.registerOpenHandler(() => {
      let message = new ChatMessage({ message: 'test message!'});
      socket.sendMessage(message.serialize());
    });
    socket.registerMessageHandler((data) => {
      console.log(data);
    });
  }
}

class ChatMessage {
  constructor ({
    message: m,
    user: u = 'batman',
    timestamp: t = (new Date().getTime())
  }) {
    this.message = m;
    this.user = u;
    this.timestamp = t;
  }
  serialize () {
    return {
      message: this.message,
      user: this.user,
      timestamp: this.timestamp
    }
  }
}

export default ChatApp;