class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable

  validates :nickname, presence: true
  validates :profile, length: { maximum: 200 }

  has_many :blogs
  has_one_attached :image

  has_one_attached :avater


  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
end
