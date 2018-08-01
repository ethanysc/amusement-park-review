Rails.application.routes.draw do
  root 'amusement_parks#index'
  devise_for :users

  resources :amusement_parks do
    resources :reviews, only: [:index, :create, :show]
    resources :rides, only: [:show]
  end

  namespace :api do
    namespace :v1 do
      resources :amusement_parks do
        resources :reviews, only: [:create, :update, :show]
        resources :rides, only: [:show] do
          resources :ride_reviews, only: [:create]
        end
      end
      resources :reviews, only: [:create, :show]
      resources :votes, only: [:create, :update, :destroy]
    end
  end
end
