require 'rails_helper'

RSpec.describe RideFeature, type: :model do
 describe "validations" do
   let(:ride_feature1) {FactoryBot.build(:ride_feature)}
   let(:ride_feature2) {FactoryBot.build(:ride_feature, name: "")}

   it "is valid with name filled in" do
     expect(ride_feature1).to be_valid
   end

   it "is invalid if name not specified" do
     expect(ride_feature2).to_not be_valid
   end
 end
end
