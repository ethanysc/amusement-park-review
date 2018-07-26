require 'rails_helper'

RSpec.describe RideReview, type: :model do
  describe "validations" do
    let(:user) {FactoryBot.build(:user)}
    let(:ride) {FactoryBot.build(:ride)}
    let(:ride_review1) {FactoryBot.build(:ride_review, ride: ride, user: user)}
    let(:ride_review2) {FactoryBot.build(:ride_review, ride: ride)}
    let(:ride_review3) {FactoryBot.build(:ride_review, user: user)}

    it "is valid with all fields required filled in" do
     expect(ride_review1).to be_valid
    end

    it "is invalid if user not specified" do
     expect(ride_review2).to_not be_valid
    end

    it "is invalid if ride not specified" do
     expect(ride_review3).to_not be_valid
    end
  end
end
