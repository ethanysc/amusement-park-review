class AddParkPhotoStringToAmusementPark < ActiveRecord::Migration[5.2]
  def change
    add_column :amusement_parks, :park_photo, :string
  end
end
