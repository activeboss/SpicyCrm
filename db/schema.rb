# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20130328094930) do

  create_table "companies", :force => true do |t|
    t.string   "companyname"
    t.string   "reg_no"
    t.string   "tax_id"
    t.string   "logo_url"
    t.datetime "created_at",                                                :null => false
    t.datetime "updated_at",                                                :null => false
    t.decimal  "reg_capital",                :precision => 15, :scale => 2
    t.string   "street1",     :limit => 100
    t.string   "street2",     :limit => 100
    t.string   "street3",     :limit => 100
    t.string   "city",        :limit => 100
    t.string   "zip",         :limit => 10
    t.string   "country",     :limit => 100
  end

  create_table "departments", :force => true do |t|
    t.string   "name"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "phones", :force => true do |t|
    t.string   "phonetype",  :limit => 10
    t.string   "number",     :limit => 20
    t.string   "vendor",     :limit => 100
    t.integer  "owner"
    t.integer  "created_by"
    t.integer  "update_by"
    t.datetime "created_at",                :null => false
    t.datetime "updated_at",                :null => false
  end

end
