require 'rails_helper'

feature "user visits a show page for an amusement park" do
  scenario "clicks link and see show page for park with all park info" do
    AmusementPark.create!(name: "Six Flags New England", address: "1623 Main St.", city: "Agawam", state: "Massachusetts", zipcode: "01001", phone_number: "(413) 786-9300", website: "https://www.sixflags.com/newengland", operating_season: "April through late December")
    AmusementPark.create!(name: "Canobie Lake Park", address: "85 N Policy St.", city: "Salem", state: "New Hampshire", zipcode: "03079", phone_number: "(603) 893-3506", website: "http://www.canobie.com/", operating_season: "May to late October", description: "Amusement Park on the shore of Canobie Lake.")

    visit root_path

    click_link "Six Flags New England"

    expect(page).to have_content "Six Flags New England"
    expect(page).to have_content "1623 Main St."
    expect(page).to have_content "Agawam"
    expect(page).to have_content "https://www.sixflags.com/newengland"

    expect(page).not_to have_content "Canobie Lake Park"
    expect(page).not_to have_content "http://www.canobie.com/"

  end

end
