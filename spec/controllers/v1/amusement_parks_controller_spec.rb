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

  describe "GET#show" do

    let!(:park) { FactoryBot.create(:amusement_park) }
    let!(:park2) { FactoryBot.create(:amusement_park, name: "Ravis Park of Snacks", address: "323 Nepal Dr.", state: "MA", city: "Portland") }

    it 'should return info for a specific amusement park' do
      get :show, params: {id: park.id}
      returned_json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq "application/json"

      expect(returned_json.length).to eq 2
      expect(returned_json["amusement_park"]).to be_a(Hash)
      expect(returned_json["amusement_park"]["name"]).to eq park.name
      expect(returned_json["amusement_park"]["address"]).to eq park.address
      expect(returned_json["amusement_park"]["city"]).to eq park.city
    end
  end
end
