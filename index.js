const user1 = {
  firstName: "John",
  lastName: "Doe",
};

const user2 = {
  firstName: "Jane",
  lastName: "Crow",
};

const johnMessages1 = ["hello", "how are you"];
const johnMessages2 = ["hi!", "Im fine, thank you"];

const dialogMap = new Map();
dialogMap.set(user1, johnMessages1);
dialogMap.set(user2, johnMessages2);
