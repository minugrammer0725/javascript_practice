const clock = document.querySelector(".clock");

const tick = () => {
  const now = new Date();

  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const html = `
  <span>${hours}</span> : 
  <span>${minutes}</span> : 
  <span>${seconds}</span>
  `;
  clock.innerHTML = html;
};

setInterval(tick, 1000);

// date-fns
const date = new Date();
//console.log(dateFns.isToday(date));

// format date
console.log(dateFns.format(date, "YYYY"));
console.log(dateFns.format(date, "MMM"));
console.log(dateFns.format(date, "dddd"));
console.log(dateFns.format(date, "Do"));
console.log(dateFns.format(date, "dddd Do MMM YYYY"));

// compare date
const beforeDate = new Date("February 1 2019 7:30:59");
console.log(dateFns.distanceInWords(date, beforeDate, { addSuffix: true }));
