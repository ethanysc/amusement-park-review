class Review < ApplicationRecord
  validates :overall_rating, presence: true, numericality: { greater_than_or_equal_to: 0, less_than_or_equal_to: 5 }
  validates :rides_rating, numericality: { greater_than_or_equal_to: 0, less_than_or_equal_to: 5 }
  validates :food_rating, numericality: { greater_than_or_equal_to: 0, less_than_or_equal_to: 5 }
  validates :atmosphere_rating, numericality: { greater_than_or_equal_to: 0, less_than_or_equal_to: 5 }
  validates :shows_rating, numericality: { greater_than_or_equal_to: 0, less_than_or_equal_to: 5 }
  validates :staff_rating, numericality: { greater_than_or_equal_to: 0, less_than_or_equal_to: 5 }
  validates :price_rating, numericality: { greater_than_or_equal_to: 0, less_than_or_equal_to: 5 }

  belongs_to :user
  belongs_to :amusement_parks
end
