require 'rails_helper'

RSpec.describe Api::V1::AmusementParksController, type: :controller do


  describe "GET#index" do

    let!(:park) { FactoryBot.create(:amusement_park) }
    let!(:park_2) { FactoryBot.create(:amusement_park, name: 'Quesos Cheese Palace') }

    it 'should return a list of all the amusement parks' do
      get :index
      returned_json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq "application/json"

      expect(returned_json.length).to eq 1
      expect(returned_json["amusement_parks"].length).to eq 2
      expect(returned_json["amusement_parks"][0]["name"]).to eq park.name
      expect(returned_json["amusement_parks"][1]["name"]).to eq park_2.name
    end
  end
end
