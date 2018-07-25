class AddAmusementParkIdToReviews < ActiveRecord::Migration[5.2]
  def change
    add_reference :reviews, :amusement_park, foreign_key: true
  end
end
