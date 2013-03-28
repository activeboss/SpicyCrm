class Company < ActiveRecord::Base
  attr_accessible :logo_url, 
  				  :companyname, 
  				  :reg_no, 
  				  :tax_id, 
  				  :reg_capital,
  				  :street1, 
  				  :street2, 
  				  :street3, 
  				  :city, 
  				  :zip, 
  				  :country
  has_many :phone , :foreign_key => 'owner'				   				  
end
