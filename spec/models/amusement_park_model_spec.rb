require 'rails_helper'

RSpec.describe AmusementPark, type: :model do
 describe "validations" do
   let(:park) {FactoryBot.build(:amusement_park)}
   let(:park2) {FactoryBot.build(:amusement_park, name: "")}
   let(:park3) {FactoryBot.build(:amusement_park, address: "")}
   let(:park4) {FactoryBot.build(:amusement_park, city: "")}
   let(:park5) {FactoryBot.build(:amusement_park, state: "")}
   let(:park6) {FactoryBot.build(:amusement_park, zipcode: "")}
   let(:park7) {FactoryBot.build(:amusement_park, phone_number: "")}
   let(:park8) {FactoryBot.build(:amusement_park, operating_season: "")}
   let(:park9) {FactoryBot.build(:amusement_park, website: "")}


   it "is valid with all fields required filled in" do
     expect(park).to be_valid
   end

   it "is not valid with a required field missing" do
     expect(park2).to_not be_valid
     expect(park3).to_not be_valid
     expect(park4).to_not be_valid
     expect(park5).to_not be_valid
     expect(park6).to_not be_valid
     expect(park7).to_not be_valid
     expect(park8).to_not be_valid
     expect(park9).to_not be_valid
   end


  end
 end
