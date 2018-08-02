class AddPhotoToAmusementPark < ActiveRecord::Migration[5.2]
  def change
    add_column :amusement_parks, :photo, :string
  end
end
