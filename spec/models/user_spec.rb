require 'rails_helper'

RSpec.describe User, type: :model do
  describe "validations" do
    let!(:user1) {FactoryBot.build(:user)}

    it "is valid with all required fields filled in" do
      expect(user1).to be_valid
    end
  end
end
