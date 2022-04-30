class UsersController < ApplicationController
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

  private
  def user_params
    params.require(:user).permit(:email, :first_name, :last_name, :password, :password_confirmation)
  end
end
