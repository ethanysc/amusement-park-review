class Api::V1::AmusementParksController < ApplicationController
  def index
    render json: AmusementPark.all
  end

  def show
    render json: AmusementPark.find(params[:id])
  end
end
