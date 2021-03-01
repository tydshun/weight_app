Rails.application.routes.draw do
<<<<<<< HEAD

  get 'blogs/index'
  root to: 'tweets#index'

  resources :tweets do
    resources :comments
  end


=======
>>>>>>> parent of b11125f (新規登録のビューを作成)
  devise_for :users
  resources :blogs

end
