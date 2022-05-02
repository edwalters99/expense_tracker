Rails.application.routes.draw do
  resources :users, :only => [:create, :index, :show]
  post '/login', to: 'users#login'
  get '/profile', to: "users#user_profile"
  
  get '/user_categories' => 'categories#user_index'
  
  resources :categories, :only => [:index]
  resources :transactions, :only => [:index, :create, :update, :destroy]

end




