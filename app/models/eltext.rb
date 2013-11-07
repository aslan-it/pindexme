class Eltext < ActiveRecord::Base
	belongs_to :pin
	has_many :pincsses, as: :cssable
	accepts_nested_attributes_for :pincsses, allow_destroy: true
end
