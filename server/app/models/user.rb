class User < ApplicationRecord
    belongs_to :family,  :optional => true
    has_many :transactions
    has_many :categories, through: :transactions
    
    validates :first_name, :presence => true
    validates :last_name, :presence => true
    validates :email, :presence => true, :uniqueness => true
    validates :password, :length => {:within => 6..40}, on: :create

    has_secure_password
end

