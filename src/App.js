import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import VideoDetail from './components/VideoDetail';
import VideoList from './components/VideoList';
import VideoListItem from './components/VideoListItem';
const apiKey = "AIzaSyDI_6b2c11zG68t7r3-HbVMkTerntzvsXw";


class App extends Component {

  state = {
    videos: [],
    selectedVideo: null
  }

  componentDidMount() {
    this.runSearch("Mike Pence");
  }


  runSearch = term => {
    axios.get("https://www.googleapis.com/youtube/v3/search", {
      params: {
        key: apiKey,
        part: "snippet",
        q: term,
        maxResults: 10
      }
    })
      .then(data => data.data.items)
      .then(videos => this.setState({ videos: videos, selectedVideo: videos[0] }))
      .catch(err => console.log(err));
  }

  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  }



  render() {
    return (

      <Container>
        <Row>
          <Col>
            <SearchBar/>
          </Col>
        </Row>
        <Row>
          <Col md="8">
            <VideoDetail selectedVideo={this.state.selectedVideo} />
          </Col>
          <Col md="4">
            <VideoList>
              {this.state.videos.map(video =>
                <VideoListItem
                  video={video}
                  key={video.id.videoId}
                  onVideoSelect={this.onVideoSelect}
                />
              )}
            </VideoList>
          </Col>
        </Row>
      </Container>

    );
  }
}

export default App;
