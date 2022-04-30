class Transaction < ApplicationRecord
    belongs_to :user
    belongs_to :categories
    enum type_of: {:expense => 0, :income => 1}
end
