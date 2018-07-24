class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.integer :overall_rating, null: false
      t.text :body
      t.integer :rides_rating
      t.integer :food_rating
      t.integer :atmosphere_rating
      t.integer :shows_rating
      t.integer :staff_rating
      t.integer :price_rating

      t.timestamps null: false

      t.belongs_to :user, null: false
    end
  end
end
