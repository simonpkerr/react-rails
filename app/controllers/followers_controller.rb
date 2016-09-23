class FollowersController < ApplicationController
  def index
    render json: User.who_to_follow(current_user.id)
  end

  def create
    follower = Follower.create(user_id: params[:user_id], followed_by: current_user.id)
    render json: follower
  end

  def destroy
#  .where([
#    "users.id = :current_user_id or users.id in (
#      select user_id from followers
#      where followed_by = :current_user_id
#      )", { current_user_id: current_user_id }
#    ])

    unfollowed = Follower.where(user_id: == params[:id] && followed_by: == current_user.id).destroy
    render json: unfollowed
  end

end
