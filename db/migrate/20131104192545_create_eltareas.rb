class CreateEltareas < ActiveRecord::Migration
  def change
    create_table :eltareas do |t|
    	t.text :textarea
    	t.integer :pin_id

      t.timestamps
    end
  end
end
