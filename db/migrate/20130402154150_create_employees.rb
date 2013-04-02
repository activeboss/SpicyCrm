class CreateEmployees < ActiveRecord::Migration
  def change
    create_table :employees do |t|
      t.integre :contact_id

      t.timestamps
    end
  end
end
