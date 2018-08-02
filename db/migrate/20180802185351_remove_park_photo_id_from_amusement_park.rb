class RemoveParkPhotoIdFromAmusementPark < ActiveRecord::Migration[5.2]
  def up
    remove_column :amusement_parks, :park_photo_id
  end

  def down
    add_column :amusement_parks, :park_photo_id, :bigint
  end
end
