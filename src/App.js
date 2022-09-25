import React from "react";
import "./App.css";
import Row from "./Row";
import requests from "./requests";
import Banner from "./Banner";
import Nav from "./Nav";
function App() {
  return (
    <div className="app">
      {/* <h1>Oh Yes</h1> */}
      <Nav/>
      <Banner/>
      <Row title="Top Picks" fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true} />
      <Row title="News & Current Affairs" fetchUrl={requests.fetchTrending} />
      <Row title="Continue Watching" fetchUrl={requests.fetchTopRated} />
      <Row title="Blockbusters" fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="Classic Cinema" fetchUrl={requests.fetchTrending} />
      <Row
        title="Festival Specials - Romance"
        fetchUrl={requests.fetchTopRated}
      />
      <Row
        title="Its Real (Documentaries)"
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Row title="Short & Sharp" fetchUrl={requests.fetchTrending} />
      <Row title="Users' Stage" fetchUrl={requests.fetchTopRated} />
    </div>
  );
}

export default App;
