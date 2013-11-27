class Pinimage < ActiveRecord::Base
	belongs_to :pin
	has_one :formcss, as: :formcssable
	has_many :pincsses, as: :cssable
	accepts_nested_attributes_for :pincsses, allow_destroy: true
	accepts_nested_attributes_for :formcss
	mount_uploader :image, ImageUploader
end
