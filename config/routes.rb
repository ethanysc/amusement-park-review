Rails.application.routes.draw do
  root 'amusement_parks#index'
  devise_for :users

  resources :amusement_parks, only: [:index, :show] do
    resources :reviews, only: [:index, :create]
    resources :rides, only: [:show]
  end


  namespace :api do
    namespace :v1 do
      resources :amusement_parks, only: [:index, :show] do
        resources :reviews, only: [:create, :update]
        resources :rides, only: [:show]
      end
      resources :reviews, only: [:create]
    end
  end

end
