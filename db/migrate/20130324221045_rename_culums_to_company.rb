class RenameCulumsToCompany < ActiveRecord::Migration
  def up
  	rename_column :companies, :name, :companyname
  end

  def down
  end
end
