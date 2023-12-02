/*
Filename: ComplexCodeExample.js
Content: Complex JavaScript code example demonstrating a chat application.
*/

// User class to represent a chat user
class User {
  constructor(name) {
    this.name = name;
    this.messages = [];
  }

  sendMessage(receiver, message) {
    this.messages.push({
      receiver: receiver,
      message: message,
      timestamp: new Date()
    });
  }
}

// ChatRoom class to manage the chat application
class ChatRoom {
  constructor() {
    this.users = [];
  }

  addUser(user) {
    this.users.push(user);
  }

  getUserMessages(user) {
    return user.messages;
  }

  // A complex function to process user messages asynchronously
  processUserMessages(user) {
    // Simulating asynchronous request
    setTimeout(() => {
      const messages = this.getUserMessages(user);
      this.displayMessages(messages);
    }, 2000);
  }

  // A helper function to display messages to console
  displayMessages(messages) {
    console.log("---- Messages ----");
    messages.forEach((message) => {
      console.log(`${message.receiver}: ${message.message} (${message.timestamp})`);
    });
    console.log("------------------");
  }
}

// Create instances of users
const user1 = new User("Alice");
const user2 = new User("Bob");
const user3 = new User("Charlie");

// Create chat room
const chatRoom = new ChatRoom();

// Add users to the chat room
chatRoom.addUser(user1);
chatRoom.addUser(user2);
chatRoom.addUser(user3);

// Simulate user interactions
user1.sendMessage(user2, "Hello, Bob!");
user2.sendMessage(user1, "Hey, Alice!");
user3.sendMessage(user1, "Greetings!");
user2.sendMessage(user3, "Hi, Charlie!");

// Process and display messages asynchronously
chatRoom.processUserMessages(user1);
chatRoom.processUserMessages(user2);
chatRoom.processUserMessages(user3);