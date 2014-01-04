class CreatePinboards < ActiveRecord::Migration
  def change
    create_table :pinboards do |t|
    	t.string :title
    	t.integer :status
    	t.integer :user_id

      t.timestamps
    end
  end
end
