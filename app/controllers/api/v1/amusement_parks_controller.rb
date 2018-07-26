class Api::V1::AmusementParksController < ApplicationController
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
    render json: {
      amusement_park: AmusementPark.find(params[:id]),
      reviews: serialized_review
    }
  end

  def serialized_review
    ActiveModel::Serializer::ArraySerializer.new(AmusementPark.find(params[:id]).reviews, each_serializer: ReviewSerializer)
  end
end
