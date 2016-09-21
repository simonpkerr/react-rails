import TweetBox from './components/TweetBox';
import TweetsList from './components/TweetsList';

class Main extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      tweetsList: []
    };
  }

  componentDidMount () {
    $.ajax('/tweets')
      .success(data => this.setState({ tweetsList: data }))
      .error(error => console.log(error));
  }

  addTweet (tweet) {

    $.post('/tweets', { body: tweet })
      .success(savedTweet => {
        let tl = this.state.tweetsList;
        tl.unshift(savedTweet);
        this.setState({ tweetsList: tl});
      })
      .error(error => console.log(error));
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
    ReactDOM.render(<Main />, document.getElementById('react'));
  }
};

$(documentReady);
