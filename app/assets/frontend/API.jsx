import ServerActions from './actions/ServerActions';

export default {
  getAllTweets () {
    $.get('/tweets')
    .success(rawTweets => ServerActions.receivedTweets(rawTweets))
    .error(error => console.log(error));
  },

  createTweet (body) {
    $.post('/tweets', { body })
    .success(t => ServerActions.receivedOneTweet(t))
    .error(error => console.log(error));
  },

  getAllUsers () {
    $.get('/followers')
    .success(users => ServerActions.receivedUsers(users))
    .error(error => console.log(error));
  },

  followUser (userId) {
    $.post('/followers', { user_id: userId })
    .success(follower => ServerActions.receivedOneFollower(follower))
    .error(error => console.log(error));
  },

  unfollowUser (userId) {
    $.ajax({
      url: '/followers/' + userId,
      type: 'DELETE'
    })
      .success(response => ServerActions.unfollowed(userId))
      .error(error => console.log(error));
  }
}
