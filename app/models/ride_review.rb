class RideReview < ApplicationRecord
  validates :rating, presence: true, numericality: { greater_than_or_equal_to: 0, less_than_or_equal_to: 5 }

  belongs_to :ride
  belongs_to :user
end
