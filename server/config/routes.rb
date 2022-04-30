Rails.application.routes.draw do
  resources :users, :only => [:new, :create, :index, :show]
  resources :categories
  resources :transactions, :only => [:new, :create, :index, :show]

end
