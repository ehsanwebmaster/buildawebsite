const canadaUrl =
  "https://newsapi.org/v2/top-headlines?country=ca&apiKey=6240fe9f7e0c4d8cbb8cb9ca40622401";
const franceUrl =
  "https://newsapi.org/v2/top-headlines?country=fr&apiKey=6240fe9f7e0c4d8cbb8cb9ca40622401";
const germanyUrl =
  "https://newsapi.org/v2/top-headlines?country=de&apiKey=6240fe9f7e0c4d8cbb8cb9ca40622401";
// Get Html Data
const canadaNewsLi = document.querySelector(".canadanews");
const franceNewsLi = document.querySelector(".francenews");
const germanyNewsLi = document.querySelector(".germanynews");
let showNews = [];
// Fetch Data
const fetchData = async (countryurl, elementclass) => {
  try {
    const res = await fetch(countryurl);
    showNews = await res.json();
    displayData(showNews, elementclass);
  } catch (err) {
    console.error(err);
  }
};
// Display Data
const displayData = (element, elementclass) => {
  let count = 0;
  const dataToDisplay = element.articles
    .map((el) => {
      return `<li><a class="hover:text-secondcolor" href="${el.url}"><span uk-icon="triangle-right"></span> ${el.title}</a></li>`;
    })
    .join("");
  elementclass.innerHTML = dataToDisplay;
};
fetchData(canadaUrl, canadaNewsLi);
fetchData(franceUrl, franceNewsLi);
fetchData(germanyUrl, germanyNewsLi);
