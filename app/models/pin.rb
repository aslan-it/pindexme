class Pin < ActiveRecord::Base
	belongs_to :user
	has_many :eltexts
	has_many :eltareas
	has_many :pinimages
	has_many :pincsses, as: :cssable
	accepts_nested_attributes_for :eltexts, allow_destroy: true
	accepts_nested_attributes_for :pinimages, allow_destroy: true
	accepts_nested_attributes_for :eltareas, allow_destroy: true
	accepts_nested_attributes_for :pincsses, allow_destroy: true

end
