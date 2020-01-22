class CreateIngredients < ActiveRecord::Migration[6.0]
  def change
    create_table :ingredients do |t|
      t.string :name
      t.integer :calories
      t.integer :carbs
      t.integer :protein
      t.integer :fat

      t.timestamps
    end
  end
end
