class CategoriesController < ApplicationController
   
    # GET /categories or /categories.json
    def index
      @categories = Category.order('id DESC')
      render json: @categories
    end

    def user_index
      categories = @user.categories.order('id DESC')
      render json: categories
    end 
  
    private
      def category_params
        params.require(:category).permit(:name, :icon)
      end
    end
  

    