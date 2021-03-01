class CommentsController < ApplicationController
  def create
    @comment = Comment.new(comment_params)
    if @comment.save
      redirect_to tweet_path(@comment.tweet_id)
    else
      @tweet = Tweet.find(@comment.tweet_id)
      @comments = @tweet.comments.includes(:user)
      render :"tweets/show"
    end
  end
  
  def comment_params
    params.require(:comment).permit(:text).merge(user_id: current_user.id, tweet_id: params[:tweet_id])
  end
end
