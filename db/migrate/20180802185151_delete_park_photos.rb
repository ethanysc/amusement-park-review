class DeleteParkPhotos < ActiveRecord::Migration[5.2]
  def up
    drop_table :park_photos
  end

  def down
    create_table :park_photos do |t|
      t.string :park_photo

      t.timestamps null: false

      t.belongs_to :amusement_park
    end
  end
end
