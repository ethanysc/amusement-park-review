require 'rails_helper'

RSpec.describe Review, type: :model do
  it { should belong_to :user }

  it { should have_valid(:overall_rating).when(5) }
  it { should_not have_valid(:overall_rating).when(6) }

end
