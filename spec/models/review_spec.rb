require 'rails_helper'

RSpec.describe Review, type: :model do
  it { should belong_to :user }

  it { should have_valid(:overall_rating).when(5) }
  it { should_not have_valid(:overall_rating).when(6) }

  it { should have_valid(:rides_rating).when(1) }
  it { should_not have_valid(:rides_rating).when(-3) }

  it { should have_valid(:food_rating).when(0) }
  it { should_not have_valid(:food_rating).when(6) }

  it { should have_valid(:atmosphere_rating).when(2) }
  it { should_not have_valid(:atmosphere_rating).when(8) }

  it { should have_valid(:shows_rating).when(4) }
  it { should_not have_valid(:shows_rating).when(9) }

  it { should have_valid(:staff_rating).when(2) }
  it { should_not have_valid(:staff_rating).when(10) }

  it { should have_valid(:price_rating).when(1) }
  it { should_not have_valid(:price_rating).when(14) }

end
