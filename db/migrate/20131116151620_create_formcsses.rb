class CreateFormcsses < ActiveRecord::Migration
  def change
    create_table :formcsses do |t|
    	t.integer :top
    	t.integer :left
    	t.integer :width
    	t.integer :height
    	t.integer :transform

      t.timestamps
    end
  end
end
