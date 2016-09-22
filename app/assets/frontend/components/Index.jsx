import React from 'react';
import TweetBox from './TweetBox';
import TweetsList from './TweetsList';
import TweetActions from '../actions/TweetActions';
import TweetStore from '../stores/TweetStore';
import { Link } from 'react-router';

TweetActions.getAllTweets();

let getAppState = () => {
  return { tweetsList: TweetStore.getAll() };
}

export default class Index extends React.Component {
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
            <Link to="follow">Who to Follow</Link>
            <TweetBox />
            <TweetsList tweets={this.state.tweetsList} />
          </div>
      );
  };
}
