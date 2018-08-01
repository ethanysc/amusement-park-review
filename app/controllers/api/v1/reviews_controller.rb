class Api::V1::ReviewsController < ApiController
  before_action :authenticate_user!, except: [:show, :destroy]

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
    review = Review.find(params[:id])
    likes = review.tally_likes
    dislikes = review.tally_dislikes

    render json: { likes: likes, dislikes: dislikes, admin_status: admin_status? }
  end

  def destroy
    review = Review.find(params[:id])
    park_id = review.amusement_park.id

    if review.destroy
      render json: { body: "deleted successfully", park_id: park_id }
    else
      render json: { error: "delete failed" }, status: 422
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

  def admin_status?
    current_user.admin?
  end
end
