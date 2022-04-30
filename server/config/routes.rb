Rails.application.routes.draw do
  resources :users, :only => [:new, :create, :index, :show]
  resources :transactions, :only => [:new, :create, :index, :show]

end
