// Data from: http://www.sagespeculation.com/2017/08/01/star-wars-the-clone-wars-episode-opening-quotes/

import { episodeArray } from "./episodes.js";

const refreshButton = document.querySelector("#refresh");

const renderSingleEpisode = () => {
  const display = document.querySelector("main");
  const episodeDiv = document.querySelector("#episode");
  const titleDiv = document.querySelector("#title");
  const listLength = episodeArray.length;
  const randomEpisode = Math.floor(Math.random() * listLength) + 1;

  display.innerHTML = `<h1>${episodeArray[randomEpisode].quote}.</h1>`;
  titleDiv.innerHTML = `<div>"${episodeArray[randomEpisode].title}"</div>`;
  episodeDiv.innerHTML = `<div>Season ${episodeArray[randomEpisode].season} Episode ${episodeArray[randomEpisode].episodeNumber}`;
};

renderSingleEpisode();

refreshButton.addEventListener("click", renderSingleEpisode);
