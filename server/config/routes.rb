Rails.application.routes.draw do
  resources :users, :only => [:create, :index, :show]
  post '/login', to: 'users#login'
  resources :categories
  resources :transactions, :only => [:new, :create, :index, :show]
end
