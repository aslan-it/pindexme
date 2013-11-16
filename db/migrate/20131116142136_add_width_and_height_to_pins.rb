class AddWidthAndHeightToPins < ActiveRecord::Migration
  def change
    add_column :pins, :width, :integer
    add_column :pins, :height, :integer
  end
end
