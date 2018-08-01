class Api::V1::AmusementParksController < ApiController

  def index
    render json: AmusementPark.all
  end

  def show
    current_user_id = current_user.id if current_user
    admin_status = false

    if user_signed_in?
      admin_status = current_user.admin?
    end

    render json: {
      amusement_park: AmusementPark.find(params[:id]),
      reviews: serialized_review,
      rides: serialized_rides,
      current_user_id: current_user_id,
      admin_status: admin_status
    }
  end

  def new
    new_amusement_park = AmusementPark.new
  end

  def create
    new_amusement_park = AmusementPark.new(amusement_park_params)
    new_amusement_park.user = current_user
    if new_amusement_park.save
      render json: { amusementPark: new_amusement_park }
    else
      render json: {errors: new_amusement_park.errors }
    end
  end

  def edit; end

  def update
    edited_amusement_park = AmusementPark.find(params[:id])
    if edited_amusement_park.update(amusement_park_params)
      render json: { amusement_park: edited_amusement_park }
    else
      render json: {errors: edited_amusement_park.errors}
    end
  end

  def destroy
    amusement_park_to_destroy = AmusementPark.find(params[:id])
    if amusement_park_to_destroy.destroy
      render json: {body: 'Deleted Successfully'}
    else
      render json: {error: 'Delete Failed'}, status: 422
    end
  end

  private

  def amusement_park_params
    params
      .require(:amusement_park)
      .permit(
        :id,
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

  def serialized_rides
    ActiveModel::Serializer::ArraySerializer.new(AmusementPark.find(params[:id]).rides, each_serializer: RideSerializer)
  end
end
