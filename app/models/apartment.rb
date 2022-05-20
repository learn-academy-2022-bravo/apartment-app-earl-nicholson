class Apartment < ApplicationRecord
    belongs_to :user
    # validates :street, :city, :state, :manager, :email, :price, :bedrooms, :bathrooms, :pets, :image
    # validates :image, length: { minimum: 10 }
end
