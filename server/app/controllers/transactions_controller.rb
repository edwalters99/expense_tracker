class TransactionsController < ApplicationController
    skip_before_action :is_authorized, only: [:create,  :index]
    def index
        transactions = Transaction.all
        render json: transactions
    end
  
    def create
        puts params
        @transaction = Transaction.create(transaction_params)
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
        if @user.user_id == @transaction.user_id 
            @transaction.destroy
            respond_to do |format|
                format.json { head :no_content }
            end
        else
            render json: {error: 'Invalid Credentials'}, status: :unauthorized
    end


    private
    def transaction_params
        params.require(:transaction).permit(:type_of, :amount, :title, :description, :date, :receipt, :category_id, :user_id)

    end
    
  end




