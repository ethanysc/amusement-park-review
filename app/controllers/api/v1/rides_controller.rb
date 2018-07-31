class Api::V1::RidesController < ApiController
  protect_from_forgery unless: -> {request.format.json?}

  def show
    render json: {
      amusement_park_id: AmusementPark.find(params[:amusement_park_id]).id,
      ride: Ride.find(params[:id]),
      features: serialized_features
    }
  end

  def serialized_ride
    ActiveModel::Serializer.new(Ride.find(params[:id]), each_serializer: RideSerializer)
  end

  def serialized_features
    ActiveModel::Serializer::ArraySerializer.new(Ride.find(params[:id]).ride_features, each_serializer: RideFeatureSerializer)
  end


end
