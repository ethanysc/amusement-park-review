import AmusementParksShowContainer from '../../app/javascript/react/containers/AmusementParksShowContainer';
import ParkInfoTile from '../../app/javascript/react/components/ParkInfoTile';
import ParkShowTile from '../../app/javascript/react/components/ParkShowTile';
import ReviewsContainer from '../../app/javascript/react/containers/ReviewsContainer'
import ReviewFormContainer from '../../app/javascript/react/containers/ReviewFormContainer'
import RidesIndexContainer from '../../app/javascript/react/containers/RidesIndexContainer'
import fetchMock from 'fetch-mock';

describe('Amusement Parks Show', () => {
  let wrapper;
  let park;
  let ride;
<<<<<<< HEAD
=======

  let postReview;
>>>>>>> 7e41a690eecebf6ab322830deebff9029ce6af0d

  beforeEach(() => {
    jasmineEnzyme();
    park = {
      id: '1',
      name: "Six Flags New England",
      address: "1623 Main St.",
      city: "Agawam",
      state: "Massachusetts",
      zipcode: "01001",
      phone_number: "(413) 786-9300",
      website: "https://www.sixflags.com/newengland",
      operating_season: "April through late December"
    };

    ride = [{
      id: '1',
      name: 'Superman the Ride'
    }]

<<<<<<< HEAD
    fetchMock.get(`/api/v1/amusement_parks/${park.id}.json`, {
=======
    // fetchMock.get(`/api/v1/amusement_parks/${park.id}.json`, {
    fetchMock.get(`/api/v1/amusement_parks/1.json`, {
>>>>>>> 7e41a690eecebf6ab322830deebff9029ce6af0d
      status: 200,
      body: {
        "amusement_park": park,
        "reviews": [],
        "rides": ride
      }
    })

    wrapper = mount(<AmusementParksShowContainer params={{id: '1'}} />)


  });

  afterEach(fetchMock.restore);

  // make a test to assert the initial state is as expect

  describe('AmusementParksShowContainer', () => {

    // make assertion that a tile is present
    // make assertion that the tile is receiving the right props
    // rinse and repeat for each tile

    fit('ParkShowTile is present and receiving the correct props', (done) => {
      setTimeout(() => {
<<<<<<< HEAD
        expect(wrapper.text()).toMatch(park.name)
=======

        expect(wrapper.find(ParkShowTile)).toBePresent();

        expect(wrapper.find(ParkShowTile).props()).toEqual({
          id: '1',
          name: "Six Flags New England",
          address: "1623 Main St.",
          city: "Agawam",
          state: "Massachusetts",
          zipcode: "01001",
          phone_number: '(413) 786-9300',
          operating_season: 'April through late December',
          website: 'https://www.sixflags.com/newengland'
        });
>>>>>>> 7e41a690eecebf6ab322830deebff9029ce6af0d
        done()

      }, 0)
    })

    fit('ReviewsContainer is present and receiving the correct props', (done) => {
      setTimeout(() => {
<<<<<<< HEAD
        expect(wrapper.text()).toMatch(park.address)
        done()
=======
>>>>>>> 7e41a690eecebf6ab322830deebff9029ce6af0d

        expect(wrapper.find(ReviewsContainer)).toBePresent();

<<<<<<< HEAD
    it('render the parks state', (done) => {
      setTimeout(() => {
        expect(wrapper.text()).toMatch(park.state)
=======
        expect(wrapper.find(ReviewsContainer).props()).toEqual({
          reviews: []
        });
>>>>>>> 7e41a690eecebf6ab322830deebff9029ce6af0d
        done()

      }, 0)
    })

    fit('ReviewFormContainer is present and receiving the correct props', (done) => {
      setTimeout(() => {
<<<<<<< HEAD
        expect(wrapper.text()).toMatch(park.city)
=======

        expect(wrapper.find(ReviewFormContainer)).toBePresent();

>>>>>>> 7e41a690eecebf6ab322830deebff9029ce6af0d
        done()

      }, 0)
    })

    fit('RidesIndexContainer is present and receiving the correct props', (done) => {
      setTimeout(() => {
<<<<<<< HEAD
        expect(wrapper.text()).toMatch(park.zipcode)
=======

        expect(wrapper.find(RidesIndexContainer)).toBePresent();

        expect(wrapper.find(RidesIndexContainer).props()).toEqual({
          parkId: '1',
          rides: ride
        });
>>>>>>> 7e41a690eecebf6ab322830deebff9029ce6af0d
        done()

      }, 0)
    })

    it('render the park rides', (done) => {
      setTimeout(() => {
        expect(wrapper.text()).toMatch(ride[0].name)
        done()

      }, 0)
    })

  })
});
