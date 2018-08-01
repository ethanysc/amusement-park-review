require 'rails_helper'

RSpec.describe AmusementPark, type: :model do
 describe "validations" do
   let!(:user) { FactoryBot.create(:user)}
   let(:park) {FactoryBot.build(:amusement_park, user: user)}
   let(:park2) {FactoryBot.build(:amusement_park, name: "", user: user)}
   let(:park3) {FactoryBot.build(:amusement_park, address: "", user: user)}
   let(:park4) {FactoryBot.build(:amusement_park, city: "", user: user)}
   let(:park5) {FactoryBot.build(:amusement_park, state: "", user: user)}
   let(:park6) {FactoryBot.build(:amusement_park, zipcode: "", user: user)}
   let(:park7) {FactoryBot.build(:amusement_park, phone_number: "", user: user)}
   let(:park8) {FactoryBot.build(:amusement_park, operating_season: "", user: user)}
   let(:park9) {FactoryBot.build(:amusement_park, website: "", user: user)}


   it "is valid with all fields required filled in" do
     expect(park).to be_valid
   end
   it "is invalid if name not specified" do
     expect(park2).to_not be_valid
   end
   it "is invalid with an address not specified" do
     expect(park3).to_not be_valid
   end
   it "is invalid with a city not specified" do
     expect(park4).to_not be_valid
   end
   it "is invalid with a state not specified" do
     expect(park5).to_not be_valid
   end
   it "is invalid with a zipcode not specified" do
     expect(park6).to_not be_valid
   end
   it "is invalid with a phone number not specified" do
     expect(park7).to_not be_valid
   end
   it "is invalid with an operating season not specified" do
     expect(park8).to_not be_valid
   end
   it "is invalid with a website not specified" do
     expect(park9).to_not be_valid
   end

  end
 end
