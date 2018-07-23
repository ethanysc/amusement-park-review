class CreateAmusementParks < ActiveRecord::Migration[5.2]
  def change
    create_table :amusement_parks do |t|
      t.string :name, null: false
      t.string :address, null: false
      t.string :city, null: false
      t.string :state, null: false
      t.string :zipcode, null: false
      t.string :phone_number, null: false
      t.string :website, null: false
      t.string :operating_season, null: false
      t.string :description

      t.timestamps null: false
    end
      add_index :amusement_parks, :name, unique: true
  end
end
