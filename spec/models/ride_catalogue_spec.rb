require 'rails_helper'

RSpec.describe RideCatalogue, type: :model do
 describe "validations" do
   let!(:user) { FactoryBot.create(:user)}
   let!(:park) {FactoryBot.build(:amusement_park, user: user)}
   let!(:ride_feature) {FactoryBot.build(:ride_feature)}
   let!(:ride) {FactoryBot.build(:ride, amusement_park: park)}
   let!(:ride_catalogue1) {RideCatalogue.create(ride: ride, ride_feature: ride_feature)}
   let!(:ride_catalogue2) {RideCatalogue.create(ride_feature: ride_feature)}
   let!(:ride_catalogue3) {RideCatalogue.create(ride: ride)}


   it "is valid with required fields filled in" do
     expect(ride_catalogue1).to be_valid
   end

   it "is invalid if ride is not specified" do
     expect(ride_catalogue2).to_not be_valid
   end

   it "is invalid if ride_feature is not specified" do
     expect(ride_catalogue3).to_not be_valid
   end
 end
end
