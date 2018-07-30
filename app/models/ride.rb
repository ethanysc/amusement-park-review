class Ride < ApplicationRecord
  validates :name, presence: true

  belongs_to :amusement_park
  has_many :ride_reviews
  has_many :ride_catalogues
  has_many :ride_features, through: :ride_catalogues
end
