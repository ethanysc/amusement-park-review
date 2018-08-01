class CreateUserVotes < ActiveRecord::Migration[5.2]
  def change
    create_table :user_votes do |t|
      t.integer :vote, null: false

      t.belongs_to :user, null: false
      t.belongs_to :review, null: false

      t.timestamps null: false
    end
  end
end
