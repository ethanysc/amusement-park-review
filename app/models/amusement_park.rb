class AmusementPark < ApplicationRecord
  validates :name, presence: true, uniqueness: true
  validates :address, presence: true
  validates :city, presence: true
  validates :state, presence: true
  validates :zipcode, presence: true
  validates :phone_number, presence: true
  validates :website, presence: true
  validates :operating_season, presence: true

  has_many :reviews, dependent: :destroy
  has_many :rides, dependent: :destroy
  
  belongs_to :user
  belongs_to :park_photo
end
