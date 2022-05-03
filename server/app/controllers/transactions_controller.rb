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
      respond_to do |format|
        if @transaction.update(transaction_params)
          format.json { render :show, status: :ok, location: @transaction }
        else
          format.json { render json: @transaction.errors, status: :unprocessable_entity }
        end
      end
    end

    # DELETE /transactions/1 or /transactions/1.json
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




