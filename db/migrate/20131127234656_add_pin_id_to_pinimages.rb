class AddPinIdToPinimages < ActiveRecord::Migration
  def change
    add_column :pinimages, :pin_id, :integer
  end
end
