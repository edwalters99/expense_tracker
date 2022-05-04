class Transaction < ApplicationRecord
    belongs_to :user, :optional => true
    belongs_to :category, :optional => true
    enum type_of: {:expense => 0, :income => 1}
end
