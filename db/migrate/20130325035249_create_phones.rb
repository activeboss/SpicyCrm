class CreatePhones < ActiveRecord::Migration
  def change
    create_table :phones do |t|
      t.string :type, :limit => 10
      t.string :number, :limit => 20
      t.string :vendor, :limit => 100 
      t.integer :owner
      t.integer :created_by
      t.integer :update_by

      t.timestamps
    end
  end
end
