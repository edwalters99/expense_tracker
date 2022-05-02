# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Family.destroy_all
f1 = Family.create :name => "Doe Family"

puts "#{ Family.count } families"


User.destroy_all
u1 = User.create :first_name => "Joe", :last_name => "Bloggs", :email => "joebloggs@gmail.com", :password => "password123"

u2 = User.create :first_name => "Jane", :last_name => "Doe", :email => "janedoe@gmail.com", :password => "password456"

u3 = User.create :first_name => "Richard", :last_name => "Roe", :email => "richardroe@gmail.com", :password => "password789"

u4 = User.create :first_name => "John", :last_name => "Doe", :email => "johndoe@gmail.com", :password => "password789"

puts "#{ User.count } users"



Category.destroy_all
c1 = Category.create :name => "Groceries", :icon => "https://placekitten.com/50/50"

c2 = Category.create :name => "Transport", :icon => "https://placekitten.com/51/50"

c3 = Category.create :name => "Takeaways", :icon => "https://placekitten.com/50/51"

c4 = Category.create :name => "Salary", :icon => "https://placekitten.com/51/51"

puts "#{ Category.count } categories"



Transaction.destroy_all

t1 = Transaction.create :type_of => 0, :amount => 14.25, :title => "Daily essentials", :description => "Bought bread, milk and breakfast cereal", :date => DateTime.parse("2022-04-30 8:15"), :receipt => "https://placekitten.com/700/700"

t2 = Transaction.create :type_of => 0, :amount => 19.50, :title => "Travel to work", :description => "Train from Chatswood to Sydney", :date => DateTime.parse("2022-04-27 16:15"), :receipt => "https://placekitten.com/701/700"

t3 = Transaction.create :type_of => 1, :amount => 850, :title => "Salary - Weekly", :date => DateTime.parse("2022-04-29 14:00"), :receipt => "https://placekitten.com/700/700"

t4 = Transaction.create :type_of => 1, :amount => 1200, :title => "Salary - Monthly", :date => DateTime.parse("2022-04-30 15:00"), :receipt => "https://placekitten.com/700/700"

t5 = Transaction.create :type_of => 0, :amount => 79.50, :title => "Petrol", :description => "Filled up the Ute!", :date => DateTime.parse("2022-04-29 14:05"), :receipt => "https://placekitten.com/700/700"


puts "#{ Transaction.count } transactions"


# assign transactions to categories
c1.transactions << t1
c2.transactions << t2
c4.transactions << t3
c4.transactions << t4
c2.transactions << t5

# assign transactions to users
u1.transactions << t1
u2.transactions << t2
u3.transactions << t3 << t4 << t5


# assign users to families
f1.users << u2
f1.users << u4






