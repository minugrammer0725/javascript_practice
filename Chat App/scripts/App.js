// dom queries
const chatList = document.querySelector(".chat-list");
const newChatForm = document.querySelector(".new-chat");
const newNameForm = document.querySelector(".new-name");
const updatedNameMsg = document.querySelector(".update-mssg");
const rooms = document.querySelector(".chat-rooms");

// class instances

// chat UI instance
const chatUI = new ChatUI(chatList);

// chatroom instance
const username = localStorage.username ? localStorage.username : "anonymous";

const chatroom = new Chatroom("general", username);

rooms.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    chatUI.clear();
    chatroom.updateRoom(e.target.getAttribute("id"));
    chatroom.getChats((chat) => chatUI.render(chat));
  }
});

chatroom.getChats((data) => {
  chatUI.render(data);
});

// add new chat
newChatForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const message = newChatForm.message.value.trim();
  chatroom
    .addChat(message)
    .then(() => {
      newChatForm.reset();
    })
    .catch((err) => {
      console.log(err);
    });
});

// update username
newNameForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const newName = newNameForm.name.value.trim();
  chatroom.updateName(newName);
  newNameForm.reset();
  updatedNameMsg.textContent = `
        Your name was updated to ${newName}
      `;
  setTimeout(() => (updatedNameMsg.textContent = ""), 2000);
});
