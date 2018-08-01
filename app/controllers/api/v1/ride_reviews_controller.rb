class Api::V1::RideReviewsController < ApiController
  def index

  end

  def new
    new_ride_review = RideReview.new
  end

  def create
    new_ride_review = RideReview.new(ride_review_params)
    new_ride_review.user = current_user
    new_ride_review.ride_id = params[:rideId]
    
    if new_ride_review.save
      render json: { ride_review: RideReviewSerializer.new(new_ride_review) }
    else
      render json: {errors: new_ride_review.errors }, status: 422
    end
  end

  def ride_review_params
    params
      .require(:ride_review)
      .permit(
        :rating
      )
  end

end
