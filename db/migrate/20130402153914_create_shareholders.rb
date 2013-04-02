class CreateShareholders < ActiveRecord::Migration
  def change
    create_table :shareholders do |t|
      t.integer :company_id
      t.integer :contact_id
      t.integer :created_by
      t.integer :update_by
      t.float :shares
      t.float :in_prosent
      t.string :status

      t.timestamps
    end
  end
end
