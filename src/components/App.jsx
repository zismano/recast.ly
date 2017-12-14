class App extends React.Component {
  constructor(props) {
    super(props);

    this.handlerSelectVideo = this.handlerSelectVideo.bind(this);
  }

  handlerSelectVideo(video) {
    this.setState({
      selected: video
    });
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search /> 
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={window.exampleVideoData[0]}/>
          </div>
          <div className="col-md-5">
            <VideoList videos={window.exampleVideoData} handler={this.handlerSelectVideo}/>
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;