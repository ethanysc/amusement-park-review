class AddUserToAmusementParks < ActiveRecord::Migration[5.2]
  def change
    change_table :amusement_parks do |t|
      t.belongs_to :user
    end 
  end
end
