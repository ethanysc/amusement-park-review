class Api::V1::VotesController < ApiController
  def create
    new_vote = UserVote.new(user_id: params[:userId], review_id: params[:reviewId], vote: params[:vote])
    if new_vote.save
      likes = new_vote.review.tally_likes
      dislikes = new_vote.review.tally_dislikes
      render json: { userVote: new_vote, likes: likes, dislikes: dislikes }
    else
      render json: { errors: new_vote.errors }, status: 422
    end
  end
end
