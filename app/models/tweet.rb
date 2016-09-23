class Tweet < ActiveRecord::Base
  belongs_to :user

#  whenever a tweet object is serialized to json,
#  you can specify an array of methods to include in the
#  serisalization process
  def as_json(options={})
    json_to_return = super
    json_to_return[:name] = name
    json_to_return[:gravatar] = gravatar

    if options.has_key? :current_user_id
      json_to_return[:is_own_tweet] = is_own_tweet(options[:current_user_id])
    end

    return json_to_return
    #super(methods: [:name, :gravatar, :user_id])
  end

  def name
    user.display_name
  end

  def gravatar
    user.gravatar
  end

  def is_own_tweet (current_user_id)
    user_id == current_user_id
  end

  def self.stream_for (current_user_id)
    joins(:user)
    .where([
      "users.id = :current_user_id or users.id in (
        select user_id from followers
        where followed_by = :current_user_id
        )", { current_user_id: current_user_id }
      ])
    .order(created_at: :desc)
    .all
  end
end
