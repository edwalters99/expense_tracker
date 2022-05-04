class TransactionsController < ApplicationController

    def index
        transactions = @user.transactions
        render json: transactions
    end
  
    def create
      puts params
      @transaction = Transaction.create(transaction_params)
      @user.transactions << @transaction  #GIVE THE NEW transaction TO THE CURRENT USER  --- OWNERSHIP  ---- 
      render json: @transaction, status: :created
    end

    # # PATCH/PUT /transactions/1 or /transactions/1.json
    
    def update
      puts transaction_params
      @transaction = Transaction.find params[:id]
      puts '#################', @transaction.id
      # respond_to do |format|
        if @transaction.update(transaction_params)
          # format.json { render :show, status: :ok, location: @transaction }
          render json: @transaction, status: :created 
        else
          format.json { render json: @transaction.errors, status: :unprocessable_entity }
        end
    end

    def show 
      @transaction = Transaction.find params[:id]
      render json: @transaction
    end

    def destroy
      transactions = @user.transactions
      transaction = transactions.find(params[:id])
      transaction.destroy
      head :no_content
    end


    private
    def transaction_params
        params.require(:transaction).permit(:id,:type_of, :amount, :title, :description, :date, :receipt, :category_id, :user_id)
    end
    
  end




