class AmusementParksController < ApplicationController
  def index
    @amusement_parks = AmusementPark.all
  end

  def show
    @amusement_park = AmusementPark.find(params[:id])
    if @amusement_park.description
      @description = @amusement_park.description
    end
  end

end
