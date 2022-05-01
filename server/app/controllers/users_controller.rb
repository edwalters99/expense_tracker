class UsersController < ApplicationController
  # before deploy eliminate the access of the index
  skip_before_action :is_authorized, only: [:create, :login, :index]
  
  def user_profile
    render json: @user
  end
  
  def index
    @users = User.all
    render json: @users
  end
  
    # render json: @users, only: [:first_name] 
    # to render certain columns only (basic method)

    # For more control use user_serializer.rb

  def show 
    @user = User.find params[:id]
    render json: @user
  end

  def create
    @user = User.create(user_params)
    render json: @user, status: :created
  end

  def login
    @user = User.find_by(email: params[:user][:email])

    if @user && @user.authenticate(params[:user][:password])
      @token = JWT.encode({user_id: @user.id}, Rails.application.secrets.secret_key_base[0])
      render json: {user: @user, token: @token}
    else
      render json: {error: 'Invalid Credentials'}, status: :unauthorized
    end
  end

  private
  def user_params
    params.require(:user).permit(:email, :first_name, :last_name, :password, :password_confirmation)
  end
end
