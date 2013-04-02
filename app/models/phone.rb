class Phone < ActiveRecord::Base
  attr_accessible :number, :phonetype,:owner_id, :vendor
  belongs_to :company
end
