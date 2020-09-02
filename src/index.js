// TODO: Render the `App` component to the DOM
import App from './components/App.js';
import searchYouTube from './lib/searchYouTube.js';
import YOUTUBE_API_KEY from './config/youtube.example.js';
//import VideoList from './components/VideoList.js';

ReactDOM.render(<App searchYouTube = {searchYouTube} API_KEY = {YOUTUBE_API_KEY}/>, document.getElementById('app'));
