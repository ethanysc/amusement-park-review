class Review < ApplicationRecord
  validates :overall_rating, numericality: { greater_than_or_equal_to: 0, less_than_or_equal_to: 5 }

  has_many :user_votes

  belongs_to :user
  belongs_to :amusement_park

  def tally_likes
    likes = 0
    self.user_votes.each do |vote|
      likes += 1 if vote.vote > 0
    end
    likes
  end

  def tally_dislikes
    dislikes = 0
    self.user_votes.each do |vote|
      dislikes += 1 if vote.vote > 0
    end
    dislikes
  end

end
