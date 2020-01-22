class User < ApplicationRecord
    has_many :favorites
    has_many :ingredients, through: :favorites 

#validations prevent users from entering invalid data or empty data
    has_secure_password
  validates :username, presence: true
  validates :username, uniqueness: true
  validates :username, length: { minimum: 4 }


  end