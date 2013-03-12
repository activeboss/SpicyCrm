# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)departments
require 'ffaker'
Department.delete_all

Department.create!(name: "Sales")
Department.create!(name: "Marketing")
Department.create!(name: "Admin")
Department.create!(name: "Support")
Department.create!(name: "Account")

2.times do
	Department.create!(name: Faker::Name.name)
end