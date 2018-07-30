class ReviewSerializer < ActiveModel::Serializer
  attributes :id,
   :overall_rating,
   :body,
   :rides_rating,
   :food_rating,
   :atmosphere_rating,
   :shows_rating,
   :staff_rating,
   :price_rating,
   :created_at,
   :user

   def user
     UserSerializer.new(object.user)
   end
end
