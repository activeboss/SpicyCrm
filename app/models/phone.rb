class Phone < ActiveRecord::Base
  attr_accessible :number, :type, :vendor
  belongs_to :company
end
