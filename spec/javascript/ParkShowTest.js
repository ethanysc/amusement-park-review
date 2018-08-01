import AmusementParksShowContainer from '../../app/javascript/react/containers/AmusementParksShowContainer';
import ParkShowTile from '../../app/javascript/react/components/ParkShowTile';
import ReviewsContainer from '../../app/javascript/react/containers/ReviewsContainer'
import ReviewFormContainer from '../../app/javascript/react/containers/ReviewFormContainer'
import RidesIndexContainer from '../../app/javascript/react/containers/RidesIndexContainer'
import fetchMock from 'fetch-mock';

describe('Amusement Parks Show', () => {
  let wrapper;
  let park;
  let ride;

  let postReview;

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

    // fetchMock.get(`/api/v1/amusement_parks/${park.id}.json`, {
    fetchMock.get(`/api/v1/amusement_parks/1.json`, {
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

    it('ParkShowTile is present and receiving the correct props', (done) => {
      setTimeout(() => {

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
        done()

      }, 0)
    })

    it('ReviewsContainer is present and receiving the correct props', (done) => {
      setTimeout(() => {

        expect(wrapper.find(ReviewsContainer)).toBePresent();

        expect(wrapper.find(ReviewsContainer).props()).toEqual({
          reviews: [], parkId: '1'
        });
        done()

      }, 0)
    })

    it('ReviewFormContainer is present and receiving the correct props', (done) => {
      setTimeout(() => {

        expect(wrapper.find(ReviewFormContainer)).toBePresent();

        done()

      }, 0)
    })

    it('RidesIndexContainer is present and receiving the correct props', (done) => {
      setTimeout(() => {

        expect(wrapper.find(RidesIndexContainer)).toBePresent();

        expect(wrapper.find(RidesIndexContainer).props()).toEqual({
          parkId: '1',
          rides: ride
        });
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
