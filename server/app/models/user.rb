class User < ApplicationRecord
    belongs_to :family,  :optional => true
    has_many :transactions
    has_many :categories, through: :transactions
    has_secure_password
end
