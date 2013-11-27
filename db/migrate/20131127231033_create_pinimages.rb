class CreatePinimages < ActiveRecord::Migration
  def change
    create_table :pinimages do |t|
    	t.string :title
    	t.string :image

      t.timestamps
    end
  end
end
