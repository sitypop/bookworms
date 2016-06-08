class ApplicationController < ActionController::API
  include ActionController::RequestForgeryProtection
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :null_session

  respond_to :json

  def angular
    # render 'layouts/application'
    render file: '../bookworms/app/assets/javascripts/angular/index.html'
  end

end
