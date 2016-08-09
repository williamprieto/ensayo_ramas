Rails.application.routes.draw do
  root 'events#index'
  resources :events
  #get 'events/show'

  #get 'events/new'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
