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
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2018_08_01_175143) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "amusement_parks", force: :cascade do |t|
    t.string "name", null: false
    t.string "address", null: false
    t.string "city", null: false
    t.string "state", null: false
    t.string "zipcode", null: false
    t.string "phone_number", null: false
    t.string "website", null: false
    t.string "operating_season", null: false
    t.string "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "user_id"
    t.index ["name"], name: "index_amusement_parks_on_name", unique: true
    t.index ["user_id"], name: "index_amusement_parks_on_user_id"
  end

  create_table "reviews", force: :cascade do |t|
    t.integer "overall_rating", null: false
    t.text "body"
    t.integer "rides_rating"
    t.integer "food_rating"
    t.integer "atmosphere_rating"
    t.integer "shows_rating"
    t.integer "staff_rating"
    t.integer "price_rating"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "user_id", null: false
    t.bigint "amusement_park_id"
    t.index ["amusement_park_id"], name: "index_reviews_on_amusement_park_id"
    t.index ["user_id"], name: "index_reviews_on_user_id"
  end

  create_table "ride_catalogues", force: :cascade do |t|
    t.bigint "ride_id", null: false
    t.bigint "ride_feature_id", null: false
    t.index ["ride_feature_id"], name: "index_ride_catalogues_on_ride_feature_id"
    t.index ["ride_id"], name: "index_ride_catalogues_on_ride_id"
  end

  create_table "ride_features", force: :cascade do |t|
    t.string "name", null: false
  end

  create_table "ride_reviews", force: :cascade do |t|
    t.integer "rating", null: false
    t.text "body"
    t.bigint "ride_id", null: false
    t.bigint "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["ride_id"], name: "index_ride_reviews_on_ride_id"
    t.index ["user_id"], name: "index_ride_reviews_on_user_id"
  end

  create_table "rides", force: :cascade do |t|
    t.string "name", null: false
    t.bigint "amusement_park_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["amusement_park_id"], name: "index_rides_on_amusement_park_id"
  end

  create_table "user_votes", force: :cascade do |t|
    t.integer "vote", null: false
    t.bigint "user_id", null: false
    t.bigint "review_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["review_id"], name: "index_user_votes_on_review_id"
    t.index ["user_id"], name: "index_user_votes_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer "sign_in_count", default: 0, null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet "current_sign_in_ip"
    t.inet "last_sign_in_ip"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "username", null: false
    t.string "profile_photo"
    t.boolean "admin", default: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

  add_foreign_key "reviews", "amusement_parks"
end
