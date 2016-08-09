class Event < ApplicationRecord
  validates :responsable, presence:true
  validates :nombreEven, presence:true
  validates :lugar, presence:true
  validates :fechaHora, presence:true
  validates :descripcion, length: { maximum: 250 }
  validates :telefono, presence:true, numericality: true
  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+\z/i
  validates :email, presence: true, length: { maximum: 255 },
            format: { with: VALID_EMAIL_REGEX }
end
