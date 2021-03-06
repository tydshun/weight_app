class TweetsController < ApplicationController
  before_action :set_tweet, only: [:show, :edit]

  def index
    @tweets = Tweet.all
    @tweet = Tweet.new
    # @tweet = Tweet.new(tweet_params)
    # @tweet.save
    # @image = url_for(@tweet.image)
    # return render json:{tweet: @tweet, image: @image}
  end

  def new
    @tweet = Tweet.new
    # @blog = Blog.new
  end

  def create
    @tweet = Tweet.new(tweet_params)
    @tweet.save
    @image = url_for(@tweet.image)
    return render json:{tweet: @tweet, image: @image}
  end

  def show
    @comment = Comment.new
    @comments = @tweet.comments.includes(:user)
    
  end

  def edit
    unless user_signed_in? && current_user.id == @tweet.user.id
      redirect_to action: :index
    end
    # @blog = Blog.find(params[:id])
  end

  def update
    @tweet = Tweet.find(params[:id])
    if @tweet.update(tweet_params)
      redirect_to action: :show
    else
      render :edit
    end
    @blog = Blog.find(params[:id])
    # if @blog.update(blog_parameter)
    #   redirect_to blogs_path, notice: "編集しました"
    # else
    #   render 'edit'
    # end
  end

  def destroy
    @tweet = Tweet.find(params[:id])
    @tweet.destroy
    # @blog = Blog.find(params[:id])
    # @blog.destroy
    # redirect_to blogs_path, notice:"削除しました"
    # redirect_to root_path
  end

  private
  def tweet_params
    params.require(:tweet).permit(:title, :text, :image).merge(user_id: current_user.id)
  end

  def set_tweet
    @tweet = Tweet.find(params[:id])
  end
#   def blog_parameter
#     params.require(:blog).permit(:title, :content, :start_time)
#   end
end
