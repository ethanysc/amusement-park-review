Rails.application.routes.draw do
  root 'amusement_parks#index'
  devise_for :users

  resources :amusement_parks, only: [:index, :show]

   namespace :api do
     namespace :v1 do
       resources :amusement_parks, only: [:index, :show]
     end
  end
end
