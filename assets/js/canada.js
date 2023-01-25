const worldClockURL = "https://worldtimeapi.org/api/timezone/america/toronto";
const holidaysUrl =
  "https://holidayapi.com/v1/holidays?pretty&key=7cb7e199-3bd9-4abc-b3cc-5eddb0b3e40d&country=CA&year=2022";

let dataClock = [];
let holidayObj = [];

const clockLi = document.querySelector(".clock");
const calendarul = document.querySelector(".calendar");
const tableBody = document.querySelector(".tablebody");
// fetch Data Clock
const fetchDataClock = async () => {
  try {
    const res = await fetch(worldClockURL);
    dataClock = await res.json();
    displayClockData(dataClock);
  } catch (err) {
    console.error(err);
  }
};
const displayClockData = (element) => {
  let hr = Number(element.datetime.slice(11, 13));
  let min = Number(element.datetime.slice(14, 16));
  let sec = Number(element.datetime.slice(17, 19));
  let calendar = element.datetime.slice(0, 10);
  let weeknumber = element.week_number;
  setInterval(() => {
    sec++;
    if (sec > 59) {
      sec = 00;
      min++;
      if (min > 59) {
        min = 00;
        hr++;
        if (hr > 24) {
          hr = 00;
        }
      }
    }
    clockLi.innerHTML = `${hr < 10 ? "0" + hr : hr} : ${
      min < 10 ? "0" + min : min
    } : ${sec < 10 ? "0" + sec : sec} ${hr < 12 ? "AM" : "PM"}`;
  }, 1000);
  calendarul.innerHTML = `<li class="font-bold"><span class="sidebaricon" uk-icon="calendar"></span> ${calendar}</li><li class="font-bold">Week Number: ${weeknumber}</li>`;
};
// Fetch holiday api
const fetchDataHoliday = async () => {
  try {
    const res = await fetch(holidaysUrl);
    holidayObj = await res.json();
    displayHoliday(holidayObj);
  } catch (err) {
    console.error(err);
  }
};
const displayHoliday = (element) => {
  const dataToDisplay = element.holidays
    .map((el) => {
      return `<tr><td>${el.date}</td><td>${el.weekday.date.name}</td><td>${el.name}</td></tr>`;
    })
    .join("");
  tableBody.innerHTML = dataToDisplay;
};
fetchDataClock();
fetchDataHoliday();
