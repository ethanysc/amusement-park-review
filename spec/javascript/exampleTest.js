import AmusementParksShowContainer from '../../app/javascript/react/containers/AmusementParksShowContainer';
import ParkInfoTile from '../../app/javascript/react/components/ParkInfoTile';
import fetchMock from 'fetch-mock';

describe('Amusement Parks Show', () => {
  let wrapper;
  let park;
  let ride;

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

    fetchMock.get(`/api/v1/amusement_parks/${park.id}.json`, {
      status: 200,
      body: {
        "amusement_park": park,
        "reviews": [],
        "rides": ride
      }
    })
    wrapper = mount(<AmusementParksShowContainer params={{id: '1'}}/>)

  });

  afterEach(fetchMock.restore);

  describe('AmusementParksShowContainer', () => {

    it('render the parks name', (done) => {
      setTimeout(() => {
        expect(wrapper.text()).toMatch(park.name)
        done()

      }, 0)
    })

    it('render the parks address', (done) => {
      setTimeout(() => {
        expect(wrapper.text()).toMatch(park.address)
        done()

      }, 0)
    })

    it('render the parks state', (done) => {
      setTimeout(() => {
        expect(wrapper.text()).toMatch(park.state)
        done()

      }, 0)
    })

    it('render the parks city', (done) => {
      setTimeout(() => {
        expect(wrapper.text()).toMatch(park.city)
        done()

      }, 0)
    })

    it('render the parks zipcode', (done) => {
      setTimeout(() => {
        expect(wrapper.text()).toMatch(park.zipcode)
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
