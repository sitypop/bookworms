class RenameColumnDateinBookClubstoDay < ActiveRecord::Migration
  def change
    rename_column :book_clubs, :date, :day
  end
end
