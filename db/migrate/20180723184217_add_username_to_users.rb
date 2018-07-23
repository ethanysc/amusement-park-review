class AddUsernameToUsers < ActiveRecord::Migration[5.2]
  def up
    add_column :users, :username, :string, null: false
    add_index :users, :username
  end

  def down
    remove_column :users, :username, :string
  end
end
