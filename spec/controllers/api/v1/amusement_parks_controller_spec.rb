require 'rails_helper'

RSpec.describe Api::V1::AmusementParksController, type: :controller do

  describe "GET#index" do

    let!(:user) { FactoryBot.create(:user)}
    let!(:park) { FactoryBot.create(:amusement_park, user: user) }
    let!(:park_2) { FactoryBot.create(:amusement_park, name: 'Quesos Cheese Palace', user: user) }

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
    let!(:user) { FactoryBot.create(:user)}
    let!(:park) { FactoryBot.create(:amusement_park, user: user) }
    let!(:park2) { FactoryBot.create(:amusement_park, name: "Ravis Park of Snacks", address: "323 Nepal Dr.", state: "MA", city: "Portland", user: user) }

    it 'should return info for a specific amusement park' do
      get :show, params: {id: park.id}
      returned_json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq "application/json"

      expect(returned_json.length).to eq 4
      expect(returned_json["amusement_park"]).to be_a(Hash)
      expect(returned_json["amusement_park"]["name"]).to eq park.name
      expect(returned_json["amusement_park"]["address"]).to eq park.address
      expect(returned_json["amusement_park"]["city"]).to eq park.city
    end
  end

  describe "DELETE#destroy" do
    let!(:user) { FactoryBot.create(:user)}
    let!(:park) { FactoryBot.create(:amusement_park, user: user) }
    let!(:review) {FactoryBot.create(:review, amusement_park: park, user: user)}
    let!(:ride) {FactoryBot.create(:ride, amusement_park: park)}

    it 'should delete an amusement park and associated data' do
      expect(AmusementPark.all.length).to eq 1
      expect(Review.all.length).to eq 1
      expect(Ride.all.length).to eq 1

      delete :destroy, params: {id: park.id}
      returned_json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq "application/json"
      expect(AmusementPark.all.length).to eq 0
      expect(Review.all.length).to eq 0
      expect(Ride.all.length).to eq 0
    end
  end
end
