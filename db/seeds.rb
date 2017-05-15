# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Task.delete_all
User.delete_all


user_1 = User.create!(email: "ben@gmail.com", password: "ben@gmail.com", password_confirmation: "ben@gmail.com")

Task.create(title: 'Go shopping ben', due_date: Date.tomorrow, description: 'Go into Leiden market', user_id: user_1.id)
Task.create(title: 'Fix shelf ben', due_date: Date.tomorrow, description: 'Trip to the hardware store', user_id: user_1.id)
Task.create(title: 'Make dinner ben', due_date: Date.tomorrow, description: 'Pizza on the menu', user_id: user_1.id)

user_1 = User.create!(email: "frank@gmail.com", password: "frank@gmail.com", password_confirmation: "frank@gmail.com")

Task.create(title: 'Go shopping frank', due_date: Date.tomorrow, description: 'Go into Leiden market', user_id: user_1.id)
Task.create(title: 'Fix shelf frank', due_date: Date.tomorrow, description: 'Trip to the hardware store', user_id: user_1.id)
Task.create(title: 'Make dinner frank', due_date: Date.tomorrow, description: 'Pizza on the menu', user_id: user_1.id)
