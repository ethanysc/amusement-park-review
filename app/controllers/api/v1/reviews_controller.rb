class Api::V1::ReviewsController < ApiController
  def new
    new_review = Review.new
  end

  def create
    new_review = Review.new(review_params)
    new_review.user = current_user

    if new_review.save
      render json: { review: new_review }
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
