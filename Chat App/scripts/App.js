// dom queries
const chatList = document.querySelector(".chat-list");
const newChatForm = document.querySelector(".new-chat");
// class instances

// chat UI instance
const chatUI = new ChatUI(chatList);

// chatroom instance
const chatroom = new Chatroom("general", "minwoo");

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
