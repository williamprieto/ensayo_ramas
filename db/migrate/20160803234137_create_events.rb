class CreateEvents < ActiveRecord::Migration[5.0]
  def change
    create_table :events do |t|
      t.string :responsable
      t.string :nombreEven
      t.string :lugar
      t.datetime :fechaHora
      t.text :descripcion
      t.text :telefono
      t.text :email

      t.timestamps
    end
  end
end
