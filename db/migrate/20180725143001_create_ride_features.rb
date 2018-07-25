class CreateRideFeatures < ActiveRecord::Migration[5.2]
  def change
    create_table :ride_features do |t|
      t.string :name, null: false

    end
  end
end
