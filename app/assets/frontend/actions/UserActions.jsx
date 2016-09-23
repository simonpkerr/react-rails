import API from '../API';

export default {
  getAllUsers() {
    API.getAllUsers();
  },
  followUser(userId){
    API.followUser(userId);
  },
  unfollowUser(userId){
    API.unfollowUser(userId);
  }

}
