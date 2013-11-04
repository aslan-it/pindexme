class Pincss < ActiveRecord::Base
	belongs_to :cssable, polymorphic: true
end
