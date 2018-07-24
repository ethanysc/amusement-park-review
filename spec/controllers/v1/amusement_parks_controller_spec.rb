require 'rails_helper'

RSpec.describe Api::V1::AmusementParksController, type: :controller do


  describe "GET#index" do
    let!(:park_1) {AmusementPark.create!(name: "Canobie Lake Park", address: "85 N Policy St.", city: "Salem", state: "New Hampshire", zipcode: "03079", phone_number: "(603) 893-3506", website: "http://www.canobie.com/", operating_season: "May to late October", description: "Amusement Park on the shore of Canobie Lake.")}
    let!(:park_2) {AmusementPark.create!(name: "Hersheypark", address: "100 Hersheypark Dr.", city: "Hershey", state: "Pennsylvania", zipcode: "17033", phone_number: "(800) 437-7439", website: "http://www.hersheypark.com/", operating_season: "Year Round", description: "Family theme park situated in Hershey.")}
    let!(:park_3) {AmusementPark.create!(name: "Magic Kingdom", address: "1180 Seven Seas Dr", city: "Lake Buena Vista", state: "Florida", zipcode: "32830", phone_number: "(407) 566-4985", website: "https://disneyworld.disney.go.com/destinations/magic-kingdom/?CMP=OKC-wdw_themeparks_gmap_189", operating_season: "Year Round")}
    let!(:park_4) {AmusementPark.create!(name: "Dollywood Theme Park", address: "2700 Dollywood Parks Blvd.", city: "Pigeon Forge", state: "Tennessee", zipcode: "37863", phone_number: "1-800-365-5996", website: "https://www.dollywood.com/", operating_season: "March through December")}

    it 'should return a list of all the amusement parks' do
      get :index
      returned_json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq "application/json"

      expect(returned_json.length).to eq 1
      expect(returned_json["amusement_parks"].length).to eq 4
      expect(returned_json["amusement_parks"][0]["name"]).to eq park_1.name
    end
  end
end
