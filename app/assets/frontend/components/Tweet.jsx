import React from 'react';
import UserActions from '../actions/UserActions';

export default class Tweet extends React.Component {
  constructor(props) {
    super(props);
    this.unfollow = this.unfollow.bind(this);
    this.canUnfollow = this.canUnfollow.bind(this);
  }

  unfollow (user_id) {
    UserActions.unfollowUser(user_id);
  }

  canUnfollow () {
    if (!this.props.is_own_tweet) {
      return (
        <a onClick={this.unfollow(this.props.user_id)}>(un-follow)</a>
      );
    }
  }


  render () {
    return (
      <li className="collection-item avatar">
        <img className="material-icons circle" src={this.props.gravatar} />
        <span className="title">{this.props.name} { this.canUnfollow() }</span>

        <p>{this.props.formattedDate}</p>
        <p>{this.props.body}</p>

      </li>
    );
  };
}
