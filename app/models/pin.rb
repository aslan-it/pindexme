class Pin < ActiveRecord::Base
	belongs_to :user
	has_many :eltexts,:dependent => :destroy
	accepts_nested_attributes_for :eltexts
end
