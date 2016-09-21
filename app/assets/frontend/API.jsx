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
  }
}
