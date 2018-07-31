class Api::V1::ReviewsController < ApiController
  def new
    new_review = Review.new
  end

  def create
    review = Review.new(review_params)
    review.user = current_user

    if review.save
      render json: { review: ReviewSerializer.new(review) }
    else
      render json: {errors: review.errors }, status: 422
    end
  end

  def show
    likes = 0
    dislikes = 0
    votes = UserVote.where(review_id: params[:id])
    votes.each do |vote|
      if vote.vote > 0
        likes += 1
      else
        dislikes += 1
      end
    end

    if current_user
      user_vote = UserVote.where(review_id: params[:id], user: current_user)

      if !user_vote.empty?
        render json: { likes: likes, dislikes: dislikes, voteStatus: user_vote[0] }
      else
        render json: { likes: likes, dislikes: dislikes }
      end
    else
      render json: { likes: likes, dislikes: dislikes }
    end
  end

  def review_params
    params
      .require(:review)
      .permit(
        :overall_rating,
        :body,
        :food_rating,
        :atmosphere_rating,
        :shows_rating,
        :staff_rating,
        :price_rating,
        :rides_rating,
        :amusement_park_id
      )
  end

end
