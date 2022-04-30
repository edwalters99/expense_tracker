class CreateTransactions < ActiveRecord::Migration[5.2]
  def change
    create_table :transactions do |t|
      t.integer :type
      t.decimal :amount
      t.text :title
      t.text :description
      t.datetime :date
      t.text :receipt
      t.integer :category_id
      t.integer :user_id 
      
      t.timestamps
    end
  end
end
