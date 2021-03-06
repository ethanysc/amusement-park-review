class AmusementParkSerializer < ActiveModel::Serializer
  attributes :id,
   :name,
   :address,
   :city,
   :state,
   :zipcode,
   :phone_number,
   :website,
   :operating_season,
   :description,
   :user_id,
   :park_photo

   has_many :reviews
   has_many :rides
end
