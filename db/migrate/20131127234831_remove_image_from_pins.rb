class RemoveImageFromPins < ActiveRecord::Migration
  def change
    remove_column :pins, :image, :string
  end
end
