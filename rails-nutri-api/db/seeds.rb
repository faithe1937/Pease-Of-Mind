# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Ingredient.create(name: 'egg', calories: '78', carbs: '0.6', protein: '6', fat: '5')

User.create(username: 'olivejuice', password: 'olivejuice', gender: 'f', age:56, weight: 140, height: 60, activity: 1.55)