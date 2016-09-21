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

  // register with the store
  componentDidMount () {
    TweetStore.addChangeListener(this._onChange);
  }

  componentWillUnmount () {
    TweetStore.removeChangeListener(this._onChange);
  }

  // when data changes in the store, this callback will always be executed
  _onChange () {
    this.setState(getAppState())
  }

  render() {
      return (
          <div className="container">
              <TweetBox />
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
