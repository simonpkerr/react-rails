import React from 'react';
import UserStore from '../stores/UserStore';
import UserActions from '../actions/UserActions';
import { Link } from 'react-router';

let getAppState = () => {
  return { users: UserStore.getAll() };
}

export default class Follow extends React.Component {
  constructor(props) {
    super(props);
    this.state = getAppState();
    this._onChange = this._onChange.bind(this);
  }

  // register with the store
  componentDidMount () {
    UserActions.getAllUsers();
    UserStore.addChangeListener(this._onChange);
  }

  componentWillUnmount () {
    UserStore.removeChangeListener(this._onChange);
  }

  // when data changes in the store, this callback will always be executed
  _onChange () {
    this.setState(getAppState())
  }

  followUser (userId) {
    UserActions.followUser(userId);
  }

  followClasses (isFollowing) {
    return "secondary-content btn-floating " + (isFollowing ? 'blue' : 'grey');
  }

  render() {
    let users = this.state.users.map(u => {
      return (
        <li key={ u.id } className="collection-item avatar">
          <img src={u.gravatar} className="circle" />
          <span className="title">{ u.name }</span>
          <a className={this.followClasses(u.following)}
            onClick={this.followUser.bind(this, u.id)}>
            <i className="material-icons">person_pin</i>
          </a>
        </li>
      );
    });
    return (
      <div>
        <h3>Who to follow</h3>
        <ul className="collection">
          { users }
        </ul>
        <Link to="/">Back</Link>
      </div>
    );
  }
}
