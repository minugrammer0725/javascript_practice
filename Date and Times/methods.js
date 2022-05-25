const date = new Date();

console.log(date.toISOString());

// years, months, day, times
console.log("getFullYear:", date.getFullYear());
console.log("getMonth:", date.getMonth()); // month is 0 based.
console.log("getDate:", date.getDate());
console.log("getDay:", date.getDay()); // Sunday is 0.
console.log("getHours:", date.getHours());
console.log("getMinutes:", date.getMinutes());
console.log("getSeconds :", date.getSeconds());

// timestamps
console.log("timestamp:", date.getTime());

// date strings
console.log("date string:", date.toDateString());
console.log("time string:", date.toTimeString());
console.log("locale string:", date.toLocaleString());
