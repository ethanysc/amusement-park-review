class Review < ApplicationRecord
  validates :overall_rating, presence: true, numericality: { greater_than_or_equal_to: 0, less_than_or_equal_to: 5 }
  
  belongs_to :user
  belongs_to :amusement_park
end
