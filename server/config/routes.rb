Rails.application.routes.draw do
  resources :users, :only => [:create, :index, :show] do
  post '/login', to: 'users#login'
  get '/profile', to: "users#user_profile"
  resources :categories, :only => [:index]
  resources :transactions, :only => [:new, :create, :index, :show]
  end
end


