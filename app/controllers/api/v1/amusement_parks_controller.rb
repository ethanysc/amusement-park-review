class Api::V1::AmusementParksController < ApiController
  protect_from_forgery unless: -> {request.format.json?}

  def index
    render json: AmusementPark.all
  end

  def show
    # amusement_park = AmusementPark.find(params[:id])
    # payload = {
    #   park: amusement_park,
    #   reviews: amusement_park.reviews
    # }
    # render json: payload

    # render json: AmusementPark.find(params[:id])
    # render json: AmusementPark.find(params[:id]).reviews
    amusement_park = AmusementPark.find(params[:id])
    render json: {
      amusement_park: amusement_park,
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
