import AppDispatcher from '../dispatcher';
import ActionTypes from '../constants';

export default {
  receivedTweets(rawTweets) {
    AppDispatcher.dispatch({
      actionType: ActionTypes.RECEIVED_TWEETS,
      rawTweets
    });
  },

  receivedOneTweet (t) {
    AppDispatcher.dispatch({
      actionType: ActionTypes.RECEIVED_ONE_TWEET,
      tweet: t
    });
  },

  receivedUsers(users) {
    AppDispatcher.dispatch({
      actionType: ActionTypes.RECEIVED_USERS,
      users
    });
  },

  receivedOneFollower (follower) {
    AppDispatcher.dispatch({
      actionType: ActionTypes.RECEIVED_ONE_FOLLOWER,
      follower
    })
  }



}
