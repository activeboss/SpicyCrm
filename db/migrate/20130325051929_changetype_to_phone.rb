class ChangetypeToPhone < ActiveRecord::Migration
  def up
  	rename_column :phones, :type, :phonetype
  end

  def down
  end
end
