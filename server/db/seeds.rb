# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
u1 = User.create :first_name => "Joe", :last_name => "Bloggs", :email => "joebloggs@gmail.com", :password => "password123"

u2 = User.create :first_name => "Jane", :last_name => "Doe", :email => "janedoe@gmail.com", :password => "password456"

u3 = User.create :first_name => "Richard", :last_name => "Roe", :email => "richardroe@gmail.com", :password => "password789"

puts "#{ User.count } users"



Category.destroy_all
c1 = Category.create :name => "Groceries", :icon => "https://placekitten.com/50/50"

c2 = Category.create :name => "Transport", :icon => "https://placekitten.com/51/50"

c3 = Category.create :name => "Takeaways", :icon => "https://placekitten.com/50/51"

puts "#{ Category.count } categories"



Transaction.destroy_all

t1 = Transaction.create :type_of => 0, :amount => 14.25, :title => "Daily essentials", :description => "Bought bread, milk and breakfast cereal", :date => DateTime.parse("2022-04-30 8:15"), :receipt => "https://placekitten.com/700/700"


puts "#{ Transaction.count } transactions"





