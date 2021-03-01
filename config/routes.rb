Rails.application.routes.draw do
<<<<<<< Updated upstream
=======
  get 'blogs/index'
  root to: 'tweets#index'
  resources :tweets do
    resources :comments
  end

>>>>>>> Stashed changes
  devise_for :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
