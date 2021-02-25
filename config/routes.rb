Rails.application.routes.draw do
  root to: 'tweets#index'
  devise_for :users
  root to: 'tweets#index'
end
