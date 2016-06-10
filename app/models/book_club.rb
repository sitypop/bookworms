class BookClub < ActiveRecord::Base
  def as_json(options = {})
    super.merge(time: time.strftime('%H:%M'))
  end
end
