class UsersController < ApplicationController
  before_action :set_user, only: [:show, :edit]
  def show
    @user = current_user
    @tweets = Tweet.page(params[:page]).per(6).order('created_at DESC')
    @blogs = @user.blogs.all
    @weight = Weight.new
    @today_weight = Weight.group_by_day(:created_at).average(:weight_body)
  end

  def edit
    @user = current_user
    @tweets = Tweet.page(params[:page]).per(6).order('created_at DESC')
  end

  private

  def set_user
    # @user = User.find(params[:id])
  end

  def blog_parameter
    params.require(:blog).permit(:title, :content, :start_time)
  end

  def weight_params
    params.require(:weight_body).permit(:weight_day).merge(user_id: current_user.id)
  end
end
