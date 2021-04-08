class Tweet < ApplicationRecord
  # has_many :comments, dependent: :destroy
  belongs_to :user
  has_one_attached :image

  validates :title, presence: true
  validates :text, presence: true
  validates :image, presence: true
  

end

