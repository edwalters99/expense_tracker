class User < ApplicationRecord
    belongs_to :family,  :optional => true
    has_many :transactions
    has_many :categories, through :transactions
end
