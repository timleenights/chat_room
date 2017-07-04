import socket from './ws-client';

class ChatApp {
  constructor () {
    socket.init('ws://localhost:3001');
  }
}

class ChatMessage {
  constructor ({
    message: m,
    user: u = 'batman',
    timestamp: t = (new Data().getTime())
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