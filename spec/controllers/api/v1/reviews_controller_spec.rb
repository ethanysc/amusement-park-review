require 'rails_helper'

RSpec.describe Api::V1::ReviewsController, type: :controller do


  describe "POST#create" do

    it 'should create a new review' do

      post :create, params: {
        review: {
          overall_rating: 5
        }
      }

      expect(response.status).to eq 200
      expect(response.content_type).to eq "application/json"

    end
  end
end
