class AddDepartamentoToEvents < ActiveRecord::Migration[5.0]
  def change
    add_column :events, :departamento, :string
  end
end
