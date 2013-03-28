Spicy::Application.routes.draw do
  resources :phones


  resources :companies do
  	resources :phones
  end	


  # get "hr#index"

  resources :departments
  resources :hr
  root :to => "home#index"
end
