import AppDispatcher from '../dispatcher';
import ActionTypes from '../constants';
import AppEventEmitter from './AppEventEmitter';
import TweetStore from './TweetStore';

let _users = [];
let _followedIds = [];

class UserEventEmitter extends AppEventEmitter {
  getAll () {
    return _users.map(u => {
      u.following = _followedIds.indexOf(u.id) > -1;
      return u;
    });
  }
}

let UserStore = new UserEventEmitter();

AppDispatcher.register(action => {
  switch (action.actionType) {
    case ActionTypes.RECEIVED_USERS:
      _users = action.users;
      UserStore.emitChange();
    break;
    case ActionTypes.RECEIVED_ONE_FOLLOWER:
      _followedIds.push(action.follower.user_id);
      UserStore.emitChange();
    break;
    case ActionTypes.REMOVED_ONE_FOLLOWER:
      _followedIds.filter(f => {
        return f !== action.user_id
      });
      UserStore.emitChange();
      TweetStore.emitChange();
    break;


    default:
  }
});

export default UserStore;
