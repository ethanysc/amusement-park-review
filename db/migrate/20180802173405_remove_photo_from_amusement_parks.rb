class RemovePhotoFromAmusementParks < ActiveRecord::Migration[5.2]
  def up
    remove_column :amusement_parks, :photo
  end

  def down
    add_column :amusement_parks, :photo, :string
  end
end
