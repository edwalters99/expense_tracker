class TransactionSerializer < ActiveModel::Serializer
  attributes :id, :type_of, :amount, :title, :description, :date, :receipt, :category_id, :user_id, :created_at, :updated_at
  # has_many :categories
end

