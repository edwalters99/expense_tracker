class TransactionsController < ApplicationController
    def index
        @transactions = Transaction.all
        render json: @transactions
    end
  
    def create
        @transaction = Transaction.create(transaction_params)
        render json: @transaction, status: :created
    end
  
    private
    def transaction_params
        params.require(:transaction).permit(:type_of, :amount, :title, :description, :date, :receipt, :category_id, :user_id)

    end
  end




