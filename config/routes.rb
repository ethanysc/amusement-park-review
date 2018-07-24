Rails.application.routes.draw do
  root 'amusement_parks#index'
  devise_for :users

  resources :amusement_parks, only: [:index]

   namespace :api do
     namespace :v1 do
       resources :amusement_parks, only: [:index]
     end
  end
end
