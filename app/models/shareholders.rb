class Shareholders < ActiveRecord::Base
  attr_accessible :company_id, :contact_id, :created_by, :in_prosent, :shares, :update_by
end
