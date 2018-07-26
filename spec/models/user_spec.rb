require 'rails_helper'

RSpec.describe User, type: :model do
  describe "validations" do
    let!(:user1) {FactoryBot.build(:user)}
    let!(:user2) {FactoryBot.build(:user, email: "")}
    let!(:user3) {FactoryBot.build(:user, password: "")}
    let!(:user4) {FactoryBot.build(:user, username: "")}

    it "is valid with all required fields filled in" do
      expect(user1).to be_valid
    end

    it "is invalid if email not specified" do
      expect(user2).to_not be_valid
    end

    it "is invalid with password not specified" do
      expect(user3).to_not be_valid
    end

    it "is invalid with username not specified" do
      expect(user4).to_not be_valid
    end
  end
end
