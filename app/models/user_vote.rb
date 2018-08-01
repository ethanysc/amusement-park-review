class UserVote < ApplicationRecord
  validates :vote, presence: true
  belongs_to :user
  belongs_to :review
end
