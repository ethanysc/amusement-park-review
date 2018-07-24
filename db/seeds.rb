# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
AmusementPark.create!(name: "Six Flags New England", address: "1623 Main St.", city: "Agawam", state: "Massachusetts", zipcode: "01001", phone_number: "(413) 786-9300", website: "https://www.sixflags.com/newengland", operating_season: "April through late December")
AmusementPark.create!(name: "Canobie Lake Park", address: "85 N Policy St.", city: "Salem", state: "New Hampshire", zipcode: "03079", phone_number: "(603) 893-3506", website: "http://www.canobie.com/", operating_season: "May to late October", description: "Amusement Park on the shore of Canobie Lake.")
AmusementPark.create!(name: "Hersheypark", address: "100 Hersheypark Dr.", city: "Hershey", state: "Pennsylvania", zipcode: "17033", phone_number: "(800) 437-7439", website: "http://www.hersheypark.com/", operating_season: "Year Round", description: "Family theme park situated in Hershey.")
AmusementPark.create!(name: "Magic Kingdom", address: "1180 Seven Seas Dr", city: "Lake Buena Vista", state: "Florida", zipcode: "32830", phone_number: "(407) 566-4985", website: "https://disneyworld.disney.go.com/destinations/magic-kingdom/?CMP=OKC-wdw_themeparks_gmap_189", operating_season: "Year Round")
AmusementPark.create!(name: "Dollywood Theme Park", address: "2700 Dollywood Parks Blvd.", city: "Pigeon Forge", state: "Tennessee", zipcode: "37863", phone_number: "1-800-365-5996", website: "https://www.dollywood.com/", operating_season: "March through December")
