class CreateEltexts < ActiveRecord::Migration
  def change
    create_table :eltexts do |t|
    	t.string :text
    	t.integer :pin_id

      t.timestamps
    end
  end
end
