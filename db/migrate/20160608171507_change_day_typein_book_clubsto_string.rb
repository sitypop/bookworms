class ChangeDayTypeinBookClubstoString < ActiveRecord::Migration
  def change
    change_column :book_clubs, :day, :string
  end
end
