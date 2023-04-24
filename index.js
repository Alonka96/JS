function getFormatDate() {
  const date = new Date();
  console.log(`${date.getHourse()}:${date.getMinutes()}`);
}

function getFormatTime() {
  const weekDays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const date = new Date();
  console.log(
    `${weekDays[date.getDay() - 1]}, ${date.getDate()} ${
      monthNames[date.getMonth()]
    } --- ${date.getHours()}:${date.getMinutes()}`
  );
}
