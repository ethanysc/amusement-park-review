class Api::V1::AmusementParksController < ApiController
  protect_from_forgery unless: -> {request.format.json?}

  def index
    render json: AmusementPark.all
  end

  def show
    render json: {
      amusement_park: AmusementPark.find(params[:id]),
      reviews: serialized_review
    }
  end

  def serialized_review
    ActiveModel::Serializer::ArraySerializer.new(AmusementPark.find(params[:id]).reviews, each_serializer: ReviewSerializer)
  end
end
