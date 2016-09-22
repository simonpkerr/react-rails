class Tweet < ActiveRecord::Base
  belongs_to :user

#  whenever a tweet object is serialized to json,
#  you can specify an array of methods to include in the
#  serisalization process
  def as_json(options={})
    super(methods: [:name, :gravatar])
  end

  def name
    user.display_name
  end

  def gravatar
    user.gravatar
  end
end
