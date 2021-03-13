class UsersController < ApplicationController
  before_action :set_user, only: [:show, :edit]
  def show
    @user = current_user
    @tweets = Tweet.page(params[:page]).per(6).order('created_at DESC')
    @blogs = @user.blogs
  end

  def edit
    @user = current_user
    @tweets = Tweet.page(params[:page]).per(6).order('created_at DESC')
  end

  private

  def set_user
    # @user = User.find(params[:id])
  end
end
