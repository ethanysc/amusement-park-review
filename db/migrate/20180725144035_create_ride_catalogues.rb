class CreateRideCatalogues < ActiveRecord::Migration[5.2]
  def change
    create_table :ride_catalogues do |t|
      t.belongs_to :ride, null: false
      t.belongs_to :ride_feature, null: false
    end
  end
end
