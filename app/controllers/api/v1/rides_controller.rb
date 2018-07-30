class Api::V1::RidesController < ApiController
  protect_from_forgery unless: -> {request.format.json?}

    def show
    # amusement_park = AmusementPark.find(params[:id])
    # payload = {
    #   park: amusement_park,
    #   reviews: amusement_park.reviews
    # }
    # render json: payload

    # render json: AmusementPark.find(params[:id])
    # render json: AmusementPark.find(params[:id]).reviews

    render json: {
      amusement_park_id: AmusementPark.find(params[:amusement_park_id]).id,
      ride: Ride.find(params[:id]),
      features: serialized_features,
      ride_reviews: serialized_ride_reviews
      }
  end

  def serialized_ride
    ActiveModel::Serializer.new(Ride.find(params[:id]), each_serializer: RideSerializer)
  end

  def serialized_features
    ActiveModel::Serializer::ArraySerializer.new(Ride.find(params[:id]).ride_features, each_serializer: RideFeatureSerializer)
  end

  def serialized_ride_reviews
      ActiveModel::Serializer::ArraySerializer.new(Ride.find(params[:id]).ride_reviews, each_serializer: RideReviewSerializer)
  end
end
