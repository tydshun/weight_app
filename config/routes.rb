Rails.application.routes.draw do
  get 'blogs/index'
  root to: 'tweets#index'
  devise_for :users
  resources :blogs
end
