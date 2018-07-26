class RideCatalogue < ApplicationRecord
  belongs_to :ride
  belongs_to :ride_feature 
end
