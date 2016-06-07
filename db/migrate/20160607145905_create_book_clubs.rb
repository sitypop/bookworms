class CreateBookClubs < ActiveRecord::Migration
  def change
    create_table :book_clubs do |t|
      t.string :name
      t.string :location
      t.string :genre
      t.date :date
      t.string :description
      t.time :time
      t.string :book

      t.timestamps null: false
    end
  end
end
