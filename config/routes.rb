Rails.application.routes.draw do

  get 'users/show'
  get 'blogs/index'
  root to: 'tweets#index'

  resources :tweets do
    resources :comments
  end
  devise_for :users
  resources :blogs
  resources :users
end
