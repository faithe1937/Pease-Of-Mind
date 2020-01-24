class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :username
      t.string :password_digest
      t.string :gender
      t.integer :age
      t.integer :weight
      t.integer :height
      t.integer :activity

      t.timestamps
    end
  end
end
