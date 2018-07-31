class RideReviewSerializer < ActiveModel::Serializer
  attributes :id,
  :rating,
  :created_at,
  :user

  def user
    UserSerializer.new(object.user)
  end
end
