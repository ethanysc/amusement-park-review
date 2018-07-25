require 'rails_helper'

RSpec.describe Ride, type: :model do
 describe "validations" do
   let(:park) {FactoryBot.build(:amusement_park)}
   let(:ride1) {FactoryBot.build(:ride, amusement_park: park)}
   let(:ride2) {FactoryBot.build(:ride, name: "")}
   let(:ride3) {FactoryBot.build(:ride)}

   it "is valid with all fields required filled in" do
     expect(ride1).to be_valid
   end

   it "is invalid if name not specified" do
     expect(ride2).to_not be_valid
   end

   it "is invalid if amusement_park not specified" do
     expect(ride3).to_not be_valid
   end
 end
end
