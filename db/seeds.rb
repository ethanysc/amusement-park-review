user1 = FactoryBot.create(:user)
user2 = FactoryBot.create(
  :user,
  email: 'ravikc@gmail.com',
  password: 'apple1234',
  username: 'ravikc',
  password_confirmation: "apple1234"
)


AmusementPark.create!(
  name: "Six Flags New England",
  address: "1623 Main St.",
  city: "Agawam",
  state: "Massachusetts",
  zipcode: "01001",
  phone_number: "(413) 786-9300",
  website: "https://www.sixflags.com/newengland",
  operating_season: "April through late December",
  user: user1)
AmusementPark.create!(
  name: "Canobie Lake Park",
  address: "85 N Policy St.",
  city: "Salem",
  state: "New Hampshire",
  zipcode: "03079",
  phone_number: "(603) 893-3506",
  website: "http://www.canobie.com/",
  operating_season: "May to late October",
  description: "Amusement Park on the shore of Canobie Lake.",
  user: user1)
AmusementPark.create!(
  name: "Hersheypark",
  address: "100 Hersheypark Dr.",
  city: "Hershey",
  state: "Pennsylvania",
  zipcode: "17033",
  phone_number: "(800) 437-7439",
  website: "http://www.hersheypark.com/",
  operating_season: "Year Round",
  description: "Family theme park situated in Hershey.",
  user: user2)
AmusementPark.create!(
  name: "Six Flags Great Adventure",
  address: "1 Six Flags Blvd",
  city: "Jackson",
  state: "New Jersey",
  zipcode: "08527",
  phone_number: "(732) 928-2000",
  website: "https://www.sixflags.com/greatadventure",
  operating_season: "Late March - Early December",
  description: "Amusement park combined with a Wild Safari animal park, the second largest theme park in the world!",
  user: user2)
AmusementPark.create!(
  name: "Sesame Place",
  address: "100 Sesame Rd",
  city: "Langhorn",
  state: "Pennsylvania",
  zipcode: "19047",
  phone_number: "1-215-702-ELMO",
  website: "https://sesameplace.com/philadelphia/?utm_source=YEXT&utm_medium=organic&utm_campaign=YEXT",
  operating_season: "May through December",
  description: "Children's theme park, located on the outskirts of Philadelphia, based on the Sesame Street television program.",
  user: user1
)

Ride.create!(
  name: "Superman the Ride",
  amusement_park: AmusementPark.find(1),
  youtubeId: "mlC0gAB5tEk"
)
Ride.create!(
  name: "Batman the Dark Knight",
  amusement_park: AmusementPark.find(1),
  youtubeId: "4VJcpmYQ26M"
)
Ride.create!(
  name: "Goliath",
  amusement_park: AmusementPark.find(1),
  youtubeId: "kS64P0y9YOw"
)
Ride.create!(
  name: "Yankee Cannonball",
  amusement_park: AmusementPark.find(2),
  youtubeId: "cOw7kkmmXKk"
)
Ride.create!(
  name: "Starblaster",
  amusement_park: AmusementPark.find(2),
  youtubeId: "Q2nxLH2wXwk"
)
Ride.create!(
  name: "Boston Tea Party",
  amusement_park: AmusementPark.find(2),
  youtubeId: "tufpWy73kfM"
)
Ride.create!(
  name: "Great Bear",
  amusement_park: AmusementPark.find(3),
  youtubeId: "efP2k539Ems"
)
Ride.create!(
  name: "Lightning Racer",
  amusement_park: AmusementPark.find(3),
  youtubeId: "Fl7_wcqiWD0"
)
Ride.create!(
  name: "Skyrush",
  amusement_park: AmusementPark.find(3),
  youtubeId: "FY8pcsSDup8"
)
Ride.create!(
  name: "Zumanjaro: Drop of Doom",
  amusement_park: AmusementPark.find(4),
  youtubeId: "N79JKDtK4hg"
)
Ride.create!(
  name: "Dark Knight Coaster",
  amusement_park: AmusementPark.find(4),
  youtubeId: "-EpLjg7Dbpo"
)
Ride.create!(
  name: "Superman: Ultimate Flight",
  amusement_park: AmusementPark.find(4),
  youtubeId: "8hv5wU-3pKE"
)
Ride.create!(
  name: "El Toro",
  amusement_park: AmusementPark.find(4),
  youtubeId: "XBf_hHNb7WQ"
)
Ride.create!(
  name: "CYBORG Cyber Spin",
  amusement_park: AmusementPark.find(4),
  youtubeId: "JLvZ7Pzwm_M"
)
Ride.create!(
  name: "Sky Splash",
  amusement_park: AmusementPark.find(5),
  youtubeId: "EryDaCRgKLw"
)
Ride.create!(
  name: "Slippery Slopes",
  amusement_park: AmusementPark.find(5),
  youtubeId: "pLdo1eZ2XPc"
)
Ride.create!(
  name: "Oscar's Wacky Taxi",
  amusement_park: AmusementPark.find(5),
  youtubeId: "fI6ZGHojq4w"
)
Ride.create!(
  name: "Blast Off",
  amusement_park: AmusementPark.find(5),
  youtubeId: "9f_27as1h0E"
)



RideFeature.create!(
  name: "Water"
)
RideFeature.create!(
  name: "Wooden"
)
RideFeature.create!(
  name: "Indoor"
)
RideFeature.create!(
  name: "Inverted"
)
RideFeature.create!(
  name: "Carnival"
)
RideFeature.create!(
  name: "Steel"
)
RideFeature.create!(
  name: "Flying"
)
RideFeature.create!(
  name: "Virtual Reality"
)
RideFeature.create!(
  name: "Floorless"
)
RideFeature.create!(
  name: "Drop Tower"
)

RideCatalogue.create!(
  ride_feature: RideFeature.find_by(name: "Steel"),
  ride: Ride.find_by(name: "Superman the Ride")
)
RideCatalogue.create!(
  ride_feature: RideFeature.find_by(name: "Virtual Reality"),
  ride: Ride.find_by(name: "Superman the Ride")
)
RideCatalogue.create!(
  ride_feature: RideFeature.find_by(name: "Floorless"),
  ride: Ride.find_by(name: "Batman the Dark Knight")
)
RideCatalogue.create!(
  ride_feature: RideFeature.find_by(name: "Steel"),
  ride: Ride.find_by(name: "Batman the Dark Knight")
)
RideCatalogue.create!(
  ride_feature: RideFeature.find_by(name: "Steel"),
  ride: Ride.find_by(name: "Goliath")
)
RideCatalogue.create!(
  ride_feature: RideFeature.find_by(name: "Inverted"),
  ride: Ride.find_by(name: "Goliath")
)
RideCatalogue.create!(
  ride_feature: RideFeature.find_by(name: "Wooden"),
  ride: Ride.find_by(name: "Yankee Cannonball")
)
RideCatalogue.create!(
  ride_feature: RideFeature.find_by(name: "Drop Tower"),
  ride: Ride.find_by(name: "Starblaster")
)
RideCatalogue.create!(
  ride_feature: RideFeature.find_by(name: "Water"),
  ride: Ride.find_by(name: "Boston Tea Party")
)
RideCatalogue.create!(
  ride_feature: RideFeature.find_by(name: "Steel"),
  ride: Ride.find_by(name: "Great Bear")
)
RideCatalogue.create!(
  ride_feature: RideFeature.find_by(name: "Inverted"),
  ride: Ride.find_by(name: "Great Bear")
)
RideCatalogue.create!(
  ride_feature: RideFeature.find_by(name: "Floorless"),
  ride: Ride.find_by(name: "Great Bear")
)
RideCatalogue.create!(
  ride_feature: RideFeature.find_by(name: "Wooden"),
  ride: Ride.find_by(name: "Lightning Racer")
)
RideCatalogue.create!(
  ride_feature: RideFeature.find_by(name: "Steel"),
  ride: Ride.find_by(name: "Skyrush")
)
RideCatalogue.create!(
  ride_feature: RideFeature.find_by(name: "Drop Tower"),
  ride: Ride.find_by(name: "Zumanjaro: Drop of Doom")
)
RideCatalogue.create!(
  ride_feature: RideFeature.find_by(name: "Indoor"),
  ride: Ride.find_by(name: "Dark Knight Coaster")
)
RideCatalogue.create!(
  ride_feature: RideFeature.find_by(name: "Steel"),
  ride: Ride.find_by(name: "Dark Knight Coaster")
)
RideCatalogue.create!(
  ride_feature: RideFeature.find_by(name: "Steel"),
  ride: Ride.find_by(name: "Superman: Ultimate Flight")
)
RideCatalogue.create!(
  ride_feature: RideFeature.find_by(name: "Flying"),
  ride: Ride.find_by(name: "Superman: Ultimate Flight")
)
RideCatalogue.create!(
  ride_feature: RideFeature.find_by(name: "Wooden"),
  ride: Ride.find_by(name: "El Toro")
)
RideCatalogue.create!(
  ride_feature: RideFeature.find_by(name: "Water"),
  ride: Ride.find_by(name: "Sky Splash")
)
RideCatalogue.create!(
  ride_feature: RideFeature.find_by(name: "Water"),
  ride: Ride.find_by(name: "Slippery Slopes")
)
RideCatalogue.create!(
  ride_feature: RideFeature.find_by(name: "Drop Tower"),
  ride: Ride.find_by(name: "Blast Off")
)
RideCatalogue.create!(
  ride_feature: RideFeature.find_by(name: "Wooden"),
  ride: Ride.find_by(name: "Oscar's Wacky Taxi")
)


FactoryBot.create(
  :review,
  user: user2,
  amusement_park: AmusementPark.first
)
FactoryBot.create(
  :review,
  overall_rating: 2,
  body: 'Worst park Ive ever been to',
  rides_rating: 2,
  food_rating: 3,
  atmosphere_rating: 2,
  shows_rating: 1,
  staff_rating: 4,
  price_rating: 0,
  user: user1,
  amusement_park: AmusementPark.first
)
