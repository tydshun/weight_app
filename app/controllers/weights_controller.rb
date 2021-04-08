class WeightsController < ApplicationController
  # def index
    # @weight = Weight.new
  # end
  
  def create
    @weight = Weight.new(weight_params)
    @weight.save
    redirect_to root_path
  end

  private

  def weight_params
    params.require(:weight).permit(:weight_body).merge(user_id: current_user.id)
  end
end
