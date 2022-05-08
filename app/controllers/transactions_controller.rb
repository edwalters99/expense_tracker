class TransactionsController < ApplicationController
  def index
      transactions = @user.transactions
      render json: transactions
  end

  def create
    transaction = Transaction.create(transaction_params)
    @user.transactions << transaction  
    render json: transaction, status: :created
  end

  def update
    transactions = @user.transactions
    transaction = transactions.find(params[:id])
      if transaction.update(transaction_params)
        render json: transaction, status: :created 
      else
        format.json { render json: transaction.errors, status: :unprocessable_entity }
      end
  end

  def destroy
    transactions = @user.transactions
    transaction = transactions.find(params[:id])
    transaction.destroy
    head :no_content
  end

  private
  def transaction_params
      params.require(:transaction).permit(:type_of, :amount, :title, :description, :date, :receipt, :category_id, :user_id)
  end
end




