class AddFormcssableIdAndFormcssableTypeAddToFormcsses < ActiveRecord::Migration
  def change
    add_column :formcsses, :formcssable_id, :integer
    add_column :formcsses, :formcssable_type, :string
  end
end
