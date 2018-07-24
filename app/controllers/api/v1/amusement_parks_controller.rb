class Api::V1::AmusementParksController < ApplicationController
  def index
    render json: AmusementPark.all
  end
end
