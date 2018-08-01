class Api::V1::VotesController < ApiController
  def create
    new_vote = UserVote.new(user_id: params[:userId], review_id: params[:reviewId], vote: params[:vote])
    if new_vote.save
      likes = new_vote.review.tally_likes
      dislikes = new_vote.review.tally_dislikes
      button = button_decider(new_vote.vote)

      render json: { userVote: new_vote, likes: likes, dislikes: dislikes, button: button}
    else
      render json: { errors: new_vote.errors }, status: 422
    end
  end

  def update
    vote = UserVote.find_by(user_id: params[:userId], review_id: params[:reviewId])

    if params[:vote] == -1
      vote.update(vote: -1)
    else
      vote.update(vote: 1)
    end

    likes = vote.review.tally_likes
    dislikes = vote.review.tally_dislikes
    button = button_decider(vote.vote)

    render json: {likes: likes, dislikes: dislikes, userVote: vote, button: button}
  end

  def destroy
    vote = UserVote.find(params[:id])
    vote.destroy

    review = Review.find(params[:reviewId])
    likes = review.tally_likes
    dislikes = review.tally_dislikes

    render json: {user_id: params[:userId], review_id: review.id, likes: likes, dislikes: dislikes}
  end

  private

  def button_decider(vote)
    button = ''

    if vote == 1
      button = "like"
    else
      button = 'dislike'
    end
    button
  end

end
