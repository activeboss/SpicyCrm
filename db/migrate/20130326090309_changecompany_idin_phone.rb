class ChangecompanyIdinPhone < ActiveRecord::Migration
  def up
  	rename_column :phones, :company_id, :owner_id
  end

  def down
  end
end
