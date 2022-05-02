class CategoriesController < ApplicationController
    before_action :set_category, only: %i[ show edit update destroy ]
  
    def index
      @categories = Category.order('id DESC')
      render json: @categories
    end 
  
    def create
      @category = Category.new(category_params)
      render json: @category
    end
  
    def update
        @category = Category.find params[:id]
        @category.update(category_params)
        render json: @category
    end
  
    def destroy
        @category = Category.find params[:id]
        @category.destroy
    end
  
    private
      def category_params
        params.require(:category).permit(:name, :icon)
      end
    end
  

    