class CreateRideReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :ride_reviews do |t|
      t.integer :rating, null: false
      t.text :body
      t.belongs_to :ride, null: false
      t.belongs_to :user, null: false

      t.timestamps null: false
    end
  end
end
