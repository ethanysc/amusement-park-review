class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  validates :email, uniqueness: true
  validates :username, uniqueness: true

  mount_uploader :profile_photo, ProfilePhotoUploader
  has_many :reviews

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable,
         :authentication_keys => [:username]

  def will_save_change_to_email?
    false
  end

  def will_save_change_to_profile_photo?
    false
  end
end
