class Api::V1::AmusementParksController < ApplicationController
  def index
    render json: AmusementPark.all
  end

  def show
    amusement_park = AmusementPark.find(params[:id])
    payload = {
      park: amusement_park,
      reviews: amusement_park.reviews
    }
    render json: payload
  end
end
