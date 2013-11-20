class Formcss < ActiveRecord::Base
	belongs_to :formcssable, polymorphic: true
end
