require 'rails_helper'

RSpec.describe Api::V1::RidesController, type: :controller do

  xdescribe "GET#show" do
    let!(:park) { FactoryBot.create(:amusement_park) }
    let!(:ride) { FactoryBot.create(:ride, amusement_park: park) }
    let!(:ride1) { FactoryBot.create(:ride, name: "Zippity Doo", amusement_park: park) }

    it 'should return info for a specific ride' do
      get :show, params: {id: ride.id}
      returned_json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq "application/json"

      expect(returned_json["ride"]).to be_a(Hash)
      expect(returned_json["ride"]["name"]).to eq ride.name
    end
  end

end
