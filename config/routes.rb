Rails.application.routes.draw do
  root 'amusement_parks#index'
  devise_for :users

  resources :amusement_parks, only: [:index]
end
