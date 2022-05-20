# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

user1 = User.create email: "testingemail@example.com", password: "testingpassword",password_confirmation: "testingpassword"

user2 = User.create email: "2testingemail@example.com", password: "testingpassword",encrypted_password: "testingpassword"

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
        image: "https://shelbychicago.com/wp-content/uploads/2020/09/The-Shelby-001.jpg",
        user_id: 1
    },
    {
        street: "Constance ST",
        city: "San Francisco",
        state: "California",
        manager: "Tom",
        email: "test@example.com",
        price: "$2500.00",
        bedrooms: 3,
        bathrooms: 2,
        pets: "cats and dogs",
        image: "https://images1.apartments.com/i2/v-Mq5PcuqEW1Epeb98jP6HaOkF5wWRlV4jIrkHT_no0/117/image.jpg",
        user_id: 2
    }
]

# users = [
#     {
#         email: "test@example.com",
#         encrypted_password: "test123"

#     }
# ]

apartments.each do |each_apartment|
    Apartment.create each_apartment
    puts "creating apartment #{each_apartment}"
end

user.each do |each_user|
    User.create each_user
    puts "creating user #{each_user}"
  end
