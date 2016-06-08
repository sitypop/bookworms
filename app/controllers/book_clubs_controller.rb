class BookClubsController < ApplicationController
  def index
    respond_with BookClub.all
  end
end
