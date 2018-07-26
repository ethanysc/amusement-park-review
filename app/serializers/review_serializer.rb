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
   :created_at

   belongs_to :amusement_park
   belongs_to :user
end
