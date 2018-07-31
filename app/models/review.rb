class Review < ApplicationRecord
  validates :overall_rating, presence: true, numericality: { greater_than_or_equal_to: 0, less_than_or_equal_to: 5 }

  has_many :user_votes

  belongs_to :user
  belongs_to :amusement_park

  def tally_likes
    likes = 0
    self.user_votes.each do |vote|
      if vote.vote > 0
        likes += 1
      end
    end
    likes
  end

  def tally_dislikes
    dislikes = 0
    self.user_votes.each do |vote|
      if vote.vote < 0
        dislikes += 1
      end
    end
    dislikes
  end

end
