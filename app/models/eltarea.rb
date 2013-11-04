class Eltarea < ActiveRecord::Base
	belongs_to :pin
	has_many :pincsses, as: :cssable
end
