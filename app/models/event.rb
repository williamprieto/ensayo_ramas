class Event < ApplicationRecord
  before_save { email.downcase! }
  validates :responsable, presence:true
  validates :nombreEven, presence:true
  validates :departamento, presence:true, exclusion: {in: %w(seleccionar) }
  validates :lugar, presence:true, exclusion: {in: %w(seleccionar) }
  validates :fechaHora, presence:true
  validates :descripcion, length: { maximum: 250 }
  validates :telefono, presence:true, numericality: true
  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+\z/i
  validates :email, presence: true, length: { maximum: 255 },
            format: { with: VALID_EMAIL_REGEX }


  def responsable=(val)
    write_attribute :responsable, val.capitalize
  end
  def nombreEven=(val)
    write_attribute :nombreEven, val.capitalize
  end
  def descripcion=(val)
    write_attribute :descripcion, val.capitalize
  end

  def self.search(search)
    if search
      where('lugar LIKE ?', "%#{search}%")
    else
      all
    end
  end

end
