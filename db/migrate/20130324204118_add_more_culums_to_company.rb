class AddMoreCulumsToCompany < ActiveRecord::Migration
  def change
  	add_column :companies, :reg_capital, :decimal, :precision => 15, :scale => 2
    add_column :companies, :street1, :string, :limit => 100
    add_column :companies, :street2, :string, :limit => 100
    add_column :companies, :street3, :string, :limit => 100
    add_column :companies, :city, :string, :limit => 100
    add_column :companies, :zip, :string, :limit => 10
    add_column :companies, :country, :string, :limit => 100
  end
end
