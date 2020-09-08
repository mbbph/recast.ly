import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import exampleVideoData from '../data/exampleVideoData.js';
import Nav from './Nav.js';
import Search from './Search.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.clickListener = this.clickListener.bind(this);
    this.state = {
      videos: exampleVideoData,
      videoClicked: exampleVideoData[0] //current vid?

    };
  }

  componentDidMount() {
    this.getYouTubeVideos('rick astley');
  }

  getYouTubeVideos(query) {
    var options = {
      key: this.props.API_KEY,
      query: query
    };

    var MyToggleDebounced = _.debounce(this.props.searchYouTube, 500);
    MyToggleDebounced(options, (videos) => {
      this.setState({
        videos: videos,
        videoClicked: videos[0]
      });
    });
  }

  clickListener(video) {
    this.setState({
      videoClicked: video
    });
  }


  render() {
    return <div>
      <Nav handleSearchInputChange={this.getYouTubeVideos.bind(this)}/>
      <div className="row">
        <div className="col-md-7">
          <VideoPlayer video={this.state.videoClicked}/>
        </div>
        <div className="col-md-5">
          <VideoList videos={this.state.videos}
            clickListener = {this.clickListener}
          />
        </div>
      </div>
    </div>;
  }
}


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
