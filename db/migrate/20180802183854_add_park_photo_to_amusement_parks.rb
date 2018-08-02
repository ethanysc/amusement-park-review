class AddParkPhotoToAmusementParks < ActiveRecord::Migration[5.2]
  def change
    change_table :amusement_parks do |t|
      t.belongs_to :park_photo
    end
  end
end
