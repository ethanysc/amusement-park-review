class Api::V1::AmusementParksController < ApiController

  def index
    render json: AmusementPark.all
  end

  def show
    render json: {
      amusement_park: AmusementPark.find(params[:id]),
      reviews: serialized_review
    }
  end

  def new
    new_amusement_park = AmusementPark.new
  end

  def create
    new_amusement_park = AmusementPark.new(amusement_park_params)
    new_amusement_park.user = current_user
    if new_amusement_park.save
      render json: { amusement_park: new_amusement_park }
    else
      render json: {errors: new_amusement_park.errors }
    end
  end

  private

  def amusement_park_params
    params
      .require(:amusement_park)
      .permit(
        :name,
        :address,
        :city,
        :state,
        :zipcode,
        :phone_number,
        :website,
        :operating_season,
        :description
      )
  end

  def serialized_review
    ActiveModel::Serializer::ArraySerializer.new(AmusementPark.find(params[:id]).reviews, each_serializer: ReviewSerializer)
  end
end
