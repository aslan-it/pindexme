class CreatePincsses < ActiveRecord::Migration
	def change
		create_table :pincsses do |t|
			t.string  :property
			t.string  :value
			t.integer :cssable_id
			t.string  :cssable_type

			t.timestamps
		end
	end
end
