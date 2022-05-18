# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
apartments = [
    {
        street: "Morning ST",
        city: "San Francisco",
        state: "California",
        manager: "Chris",
        email: "test@example.com",
        price: "$2300.00",
        bedrooms: 2,
        bathrooms: 2,
        pets: "cats and dogs",
        image: "http://",
        user_id: 1
    }
]

users = [
    {
        email: "test@example.com",
        encrypted_password: "test123"

    }
]

apartments.each do |each_apartment|
    Apartment.create each_apartment
    puts "creating apartment #{each_apartment}"
end

users.each do |each_user|
    User.create each_user
    puts "creating user #{each_user}"
  end
