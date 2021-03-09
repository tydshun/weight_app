class ApplicationController < ActionController::Base
  before_action :configure_permitted_parameters, if: :devise_controller?

  def update_resource(resource, params)
    resource.update_without_password(params)
  end
  
  private
  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:nickname])
    # プロフィールのストパラ
    devise_parameter_sanitizer.permit(:account_update, keys: [:nickname, :profile])
  end
end
