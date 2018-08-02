class CreateParkPhotos < ActiveRecord::Migration[5.2]
  def change
    create_table :park_photos do |t|
      t.string :park_photo

      t.timestamps null: false

      t.belongs_to :amusement_park
    end
  end
end
