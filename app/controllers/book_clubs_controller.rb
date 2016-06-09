class BookClubsController < ApplicationController
  skip_before_filter  :verify_authenticity_token

  def index
    respond_with BookClub.all
  end

  def create
    @bookclub = BookClub.create!(bookclub_params)

    respond_to do |format|
      format.json { render json: @bookclub, status: :created, location: @bookclub }
    end
  end

  def bookclub_params
    params.require(:params["params"]).permit(:name, :location, :description, :genre, :day, :time, :book)
  end


end
