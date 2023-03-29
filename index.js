const userPlan = {
  mon: "dantist",
  tue: "go to park",
  wed: "hard work",
  thu: "go party",
  fri: "read a book",
  sat: "stay in bed",
};


const userInput = prompt("What day do you want?");
alert(`${userPlan[userInput] ? userPlan[userInput] : 'Noting planned'}`);
