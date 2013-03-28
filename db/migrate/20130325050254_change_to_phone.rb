class ChangeToPhone < ActiveRecord::Migration
  def up
  	rename_column :phones, :owner, :company_id
  end

  def down
  end
end
