class Api::V1::AmusementParksController < ApiController
  protect_from_forgery unless: -> {request.format.json?}

  def index
    render json: AmusementPark.all
  end

  def show
    render json: {
      amusement_park: AmusementPark.find(params[:id]),
      reviews: serialized_reviews,
      rides: serialized_rides
    }
  end

  def serialized_reviews
    ActiveModel::Serializer::ArraySerializer.new(AmusementPark.find(params[:id]).reviews, each_serializer: ReviewSerializer)
  end

  def serialized_rides
    ActiveModel::Serializer::ArraySerializer.new(AmusementPark.find(params[:id]).rides, each_serializer: RideSerializer)
  end
end
