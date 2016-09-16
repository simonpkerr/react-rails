import TweetBox from './components/TweetBox';
import TweetsList from './components/TweetsList';

let mockTweets = [
  {
    id: 1,
    name: 'si kerr',
    body: 'tweet body 1'
  },
  {
    id: 2,
    name: 'pete kerr',
    body: 'tweet body 2'
  },
  {
    id: 3,
    name: 'tom kerr',
    body: 'tweet body 3'
  }
];

class Main extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      tweetsList: mockTweets
    };
  }

  addTweet (tweet) {
    let tl = this.state.tweetsList;
    tl.unshift({id: Date.now(), name: 'Guest', body: tweet});

    this.setState({ tweetsList: tl});

  }

  render() {
      return (
          <div className="container">
              <TweetBox sendTweet={this.addTweet.bind(this)} />
              <TweetsList tweets={this.state.tweetsList} />
          </div>
      );
  };
}

let documentReady = () => {
  if (document.getElementById('react')) {
    ReactDOM.render(<Main />,document.getElementById('react'));
  }
};

$(documentReady);
