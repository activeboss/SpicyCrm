class ChangeOwnerculome < ActiveRecord::Migration
  def up
  	rename_column :phones, :owner_id, :owner
  end

  def down
  end
end
