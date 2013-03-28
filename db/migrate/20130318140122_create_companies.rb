class CreateCompanies < ActiveRecord::Migration
  def change
    create_table :companies do |t|
      t.string :name
      t.string :reg_no
      t.string :tax_id
      t.string :logo_url

      t.timestamps
    end
  end
end
