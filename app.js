// Data from: http://www.sagespeculation.com/2017/08/01/star-wars-the-clone-wars-episode-opening-quotes/

import { episodeArray } from "./episodes.js";

const refreshButton = document.querySelector("#refresh");

const doubleDigitEpisode = (episodeNum) => {
  return episodeNum > 9 ? episodeNum : `0${episodeNum}`
}

const renderAllEpisodes = () => {
  const displayArea = document.querySelector('main');
  episodeArray.forEach(episode => {
    displayArea.innerHTML += `
    <div class="episode-quote">
      <div class="details-all">  
        <div>
          0${episode.season}x${doubleDigitEpisode(episode.episodeNumber)}
          </div>
          <div class="make-yellow">${episode.title}</div>
      </div>
      <div class="quote-style">
        ${episode.quote}
      </div>
    </div>`
  })
}

const renderSingleEpisode = () => {
  refreshButton.addEventListener("click", renderSingleEpisode);

  const display = document.querySelector("main");
  const details = document.querySelector('.details');
  const randomEpisode = Math.floor(Math.random() * episodeArray.length) + 1;
  // Calls function to give all episodes double digit length
  const formattedEpisodeNum = doubleDigitEpisode(episodeArray[randomEpisode].episodeNumber);
  display.innerHTML = `<h1>${episodeArray[randomEpisode].quote}.</h1>`;
  details.innerHTML = `-- <span>${episodeArray[randomEpisode].title} (0${episodeArray[randomEpisode].season} x ${formattedEpisodeNum})`;
};

// IF the refresh button has a value, it's on the quote page so show a single quote. If not, you're on the all episodes page
refreshButton ? renderSingleEpisode() : renderAllEpisodes();
