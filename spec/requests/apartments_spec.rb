require 'rails_helper'

RSpec.describe "Apartments", type: :request do
  describe "GET /index" do
    it 'returns a list of apartments' do
    
      user = User.where(email: 'test@test.test').first_or_create(password: '12345678', password_confirmation: '12345678')

      user.apartments.create(
        street: "Morning ST",
        city: "San Francisco",
        state: "California",
        manager: "Chris",
        email: "test@example.com",
        price: "$2300.00",
        bedrooms: 2,
        bathrooms: 2,
        pets: "cats and dogs",
        image: "https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1036&q=80"
      )

      get '/apartments'

      apartment = JSON.parse(response.body)
      expect(response).to have_http_status(200)
      expect(apartment.length).to eq 1
    end
  end
end
