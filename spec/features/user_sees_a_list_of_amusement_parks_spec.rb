require 'rails_helper'

# [x] Visiting the `/amusement_parks` path should contain a list of amusement parks.
# [x] Visiting the root path should display a list of all amusement parks.

feature "visitor sees a list of amusement parks" do
  scenario "sees a list of amusement parks" do
    AmusementPark.create!(name: "Six Flags New England", address: "1623 Main St.", city: "Agawam", state: "Massachusetts", zipcode: "01001", phone_number: "(413) 786-9300", website: "https://www.sixflags.com/newengland", operating_season: "April through late December")
    AmusementPark.create!(name: "Canobie Lake Park", address: "85 N Policy St.", city: "Salem", state: "New Hampshire", zipcode: "03079", phone_number: "(603) 893-3506", website: "http://www.canobie.com/", operating_season: "May to late October", description: "Amusement Park on the shore of Canobie Lake.")

    visit amusement_parks_path

    expect(page).to have_content "Six Flags New England"
    expect(page).to have_content "Canobie Lake Park"
    expect(page).not_to have_content "1623 Main St."
    expect(page).not_to have_content "85 N Policy St."

    visit root_path

    expect(page).to have_content "Six Flags New England"
    expect(page).to have_content "Canobie Lake Park"
    expect(page).not_to have_content "1623 Main St."
    expect(page).not_to have_content "85 N Policy St."
  end
end
