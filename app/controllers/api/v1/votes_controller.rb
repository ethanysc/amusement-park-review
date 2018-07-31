class Api::V1:VotesController < ApiController
  def create
    new_vote = UserVote.new(user_id: params[:userId], review_id: params[:reviewId], vote: params[:vote])
    if new_vote.save

      render json: { userVote: new_vote }
    else
      render json: { errors: new_vote.errors }, status: 422
    end
    binding.pry
  end
end
