// Chatroom

// add new chat document

// set up realtime listener

// update the username

// update the room
class Chatroom {
  constructor(room, username) {
    this.username = username;
    this.room = room;
    this.chats = db.collection("chats");
    this.unsub;
  }

  async addChat(message) {
    // create chat object
    const now = new Date();
    const chat = {
      message,
      username: this.username,
      room: this.room,
      created_at: firebase.firestore.Timestamp.fromDate(now),
    };

    // save to db.
    const response = await this.chats.add(chat);
    return response;
  }

  getChats(callback) {
    this.unsub = this.chats
      .where("room", "==", this.room)
      .orderBy("created_at")
      .onSnapshot((snapshot) => {
        snapshot.docChanges().forEach((change) => {
          if (change.type === "added") {
            // update UI
            callback(change.doc.data());
          }
        });
      });
  }

  updateName(username) {
    this.username = username;
    // store updated name in local storage
    localStorage.setItem("username", username);
  }

  updateRoom(room) {
    this.room = room;
    console.log("room updated");
    if (this.unsub) {
      this.unsub();
    }
  }
}
