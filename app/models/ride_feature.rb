class RideFeature < ApplicationRecord
  validates :name, presence: true

  has_many :ride_catalogues
  has_many :rides, through: :ride_catalogues   
end
