class Review < ApplicationRecord
  validates :overall_rating, presence: true, inclusion: 0..5
  validates :rides_rating, inclusion: 0..5
  validates :food_rating, inclusion: 0..5
  validates :atmosphere_rating, inclusion: 0..5
  validates :shows_rating, inclusion: 0..5
  validates :staff_rating, inclusion: 0..5
  validates :price_rating, inclusion: 0..5

  belongs_to :user
end
