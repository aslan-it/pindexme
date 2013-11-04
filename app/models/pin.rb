class Pin < ActiveRecord::Base
	belongs_to :user
	has_many :eltexts, :dependent => :destroy
	has_many :eltareas, :dependent => :destroy
	accepts_nested_attributes_for :eltexts
	accepts_nested_attributes_for :eltareas
	has_many :pincsses, as: :cssable
	accepts_nested_attributes_for :pincsses
end
