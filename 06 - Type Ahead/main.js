const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

const cities = [];

fetch(endpoint)
  .then(response => response.json())
  .then(data => cities.push(...data))


const findMatches = (wordToMatch, cities) => {
  return cities.filter(place => {
    const regex = new RegExp(wordToMatch, 'gi');
    return place.city.match(regex) || place.state.match(regex);
  });
}

const numberWithCommas = (num) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g,',')
}

const displayMatches = (event) => {
  const matchArray = findMatches(event.currentTarget.value,cities);
  const html = matchArray.map(place => {
    const regex = new RegExp(event.currentTarget.value, "gi");
    const cityName = place.city.replace(
      regex,
      `<span class="hl">${event.currentTarget.value}</span>`
    );
    const stateName = place.state.replace(
      regex,
      `<span class="hl">${event.currentTarget.value}</span>`
    );
    return `<li>
              <span class="name">${cityName}, ${stateName}</span>
              <span class="population">${numberWithCommas(place.population)}</span>
            </li>
    `;
  }).join('');
  suggestions.innerHTML = html;
}

const searchInput = document.querySelector(".search");
const suggestions = document.querySelector(".suggestions");

searchInput.addEventListener("keyup", displayMatches);
