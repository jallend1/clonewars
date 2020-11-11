// Data from: http://www.sagespeculation.com/2017/08/01/star-wars-the-clone-wars-episode-opening-quotes/

import { episodeArray } from "./episodes.js";

const refreshButton = document.querySelector("#refresh");

const renderAllEpisodes = () => {
  const displayArea = document.querySelector('main');
  episodeArray.forEach(episode => {
    displayArea.innerHTML += `
    <div class="episode-quote">
      <div>
        ${episode.season}x${episode.episodeNumber} - ${episode.title}
      </div>
      <div>
        ${episode.quote}
      </div>
    </div>`
  })
}

const renderSingleEpisode = () => {
  refreshButton.addEventListener("click", renderSingleEpisode);

  const display = document.querySelector("main");
  const episodeDiv = document.querySelector("#episode");
  const titleDiv = document.querySelector("#title");
  const randomEpisode = Math.floor(Math.random() * episodeArray.length) + 1;

  display.innerHTML = `<h1>${episodeArray[randomEpisode].quote}.</h1>`;
  titleDiv.innerHTML = `<div>"${episodeArray[randomEpisode].title}"</div>`;
  episodeDiv.innerHTML = `<div>Season ${episodeArray[randomEpisode].season} Episode ${episodeArray[randomEpisode].episodeNumber}`;
};

// IF the refresh button has a value, it's on the quote page so show a single quote. If not, you're on the all episodes page
refreshButton ? renderSingleEpisode() : renderAllEpisodes();
