let dayName = (date) => {
        const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", 
        "Wednesday", "Thursday", "Friday", "Saturday"];

        return daysOfTheWeek[date.getDay()];
      }

let greeting = (date) => {
	alert(`Hello world, happy ${dayName(date)}!diid`);
}