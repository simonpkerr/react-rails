import TweetBox from './components/TweetBox';
import TweetsList from './components/TweetsList';
import TweetActions from './actions/TweetActions';
import TweetStore from './stores/TweetStore';

TweetActions.getAllTweets();

let getAppState = () => {
  return { tweetsList: TweetStore.getAll() };
}

class Main extends React.Component {
  constructor (props) {
    super (props);
    this.state = getAppState();
    this._onChange = this._onChange.bind(this);
  }

  
  componentDidMount () {
    TweetStore.addChangeListener(this._onChange);
    // $.ajax('/tweets')
    //   .success(data => this.setState(this.formattedTweets(data)))
    //   .error(error => console.log(error));
  }

  componentWillUnmount () {
    TweetStore.removeChangeListener(this._onChange);
  }

  // when data changes in the store, this callback will always be executed
  _onChange () {
    this.setState(getAppState())
  }

  addTweet (tweet) {

    // $.post('/tweets', { body: tweet })
    //   .success(savedTweet => {
    //
    //     let tl = this.state.tweetsList;
    //     tl.unshift(savedTweet);
    //     this.setState(this.formattedTweets(tl));
    //   })
    //   .error(error => console.log(error));
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
