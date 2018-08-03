class AddYoutubeIdToRides < ActiveRecord::Migration[5.2]
  def change
    add_column :rides, :youtubeId, :string
  end
end
