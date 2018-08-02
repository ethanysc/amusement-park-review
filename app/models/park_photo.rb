class ParkPhoto < ApplicationRecord
  mount_uploader :park_photo, ParkPhotoUploader

  belongs_to :amusement_park
end
