import { Button } from "@mui/material";
import React from "react";
import { AutoCountriesProfile } from "../../components/Drawer/Select";

const Settings = ({ customer }) => {
  return (
    <div class="customer-profile">
      <div class="card-body">
        <form>
          <h6 class="heading-small text-muted mb-4">User information</h6>
          <div class="pl-lg-4">
            <div class="row">
              <div class="col-lg-6">
                <div class="form-group focused">
                  <label class="form-control-label" for="input-first-name">
                    First name
                  </label>
                  <input
                    type="text"
                    id="input-first-name"
                    class="form-control form-control-alternative"
                    placeholder="First name"
                    defaultValue={customer.firstName}
                  />
                </div>
              </div>
              <div class="col-lg-6">
                <div class="form-group focused">
                  <label class="form-control-label" for="input-last-name">
                    Last name
                  </label>
                  <input
                    type="text"
                    id="input-last-name"
                    class="form-control form-control-alternative"
                    placeholder="Last name"
                    defaultValue={customer.lastName}
                  />
                </div>
              </div>
              <div class="col-lg-6">
                <div class="form-group">
                  <label class="form-control-label" for="input-email">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="input-email"
                    class="form-control form-control-alternative"
                    placeholder="email"
                    value={customer.email}
                  />
                </div>
              </div>
              <div class="col-lg-6">
                <div class="form-group">
                  <label class="form-control-label" for="input-email">
                    Phone
                  </label>
                  <input
                    type="email"
                    id="input-email"
                    class="form-control form-control-alternative"
                    placeholder="email"
                    value={customer.phone}
                  />
                </div>
              </div>
            </div>
          </div>
          <hr class="my-4" />
          {/* <!-- Address --> */}
          <h6 class="heading-small text-muted mb-4">Contact information</h6>
          <div class="pl-lg-4">
            <div class="row">
              <div class="col-md-12">
                <div class="form-group focused">
                  <label class="form-control-label" for="input-address">
                    Address
                  </label>
                  <input
                    id="input-address"
                    class="form-control form-control-alternative"
                    placeholder="Home Address"
                    defaultValue={customer.address}
                    type="text"
                  />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-4">
                <div class="form-group focused">
                  <label class="form-control-label" for="input-city">
                    City
                  </label>
                  <input
                    type="text"
                    id="input-city"
                    class="form-control form-control-alternative"
                    placeholder="City"
                    value="New York"
                  />
                </div>
              </div>
              <div class="col-lg-4">
                <div class="form-group focused">
                  <label class="form-control-label" for="input-country">
                    Country
                  </label>
                  {/* <input
                    type="text"
                    id="input-country"
                    class="form-control form-control-alternative"
                    placeholder="Country"
                    defaultValue={customer.country}
                  /> */}
                  <AutoCountriesProfile label={customer.country} />
                </div>
              </div>
              <div class="col-lg-4">
                <div class="form-group">
                  <label class="form-control-label" for="input-country">
                    Postal code
                  </label>
                  <input
                    type="number"
                    id="input-postal-code"
                    class="form-control form-control-alternative"
                    placeholder="Postal code"
                    defaultValue={customer.zipcode}
                  />
                </div>
              </div>
            </div>
          </div>
          <hr class="my-4" />
          {/* <!-- Description --> */}
          <h6 class="heading-small text-muted mb-4">About me</h6>
          <div class="pl-lg-4">
            <div class="form-group focused">
              <label>About Me</label>
              <textarea
                rows="4"
                class="form-control form-control-alternative"
                placeholder="A few words about you ..."
              >
                {customer.bio ? (
                  <p>{customer.bio}</p>
                ) : (
                  "Write something about yourself."
                )}
              </textarea>
            </div>
          </div>
        </form>
        <Button variant="outlined">Save Changes</Button>
      </div>
    </div>
  );
};

export default Settings;
