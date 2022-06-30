import React, { useEffect } from "react";
import "./style.css";
import BasicTabs from "../../test";
import Settings from "./Settings";
import PostCard from "../../components/Post card/PostCard";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../../../Redux/customers";
const CustomerProfile = () => {
  const customer = useSelector((state) => state.customer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return (
    <div class="customer-profile">
      <div class="main-content">
        {/* <!-- Top navbar --> */}
        {/* <!-- Header --> */}
        {/* <!-- Page content --> */}
        <div class="container-fluid mt--7">
          <div class="row">
            <div class="col-xl-4 order-xl-2 mb-5 mb-xl-0">
              <div class="card card-profile shadow">
                <div class="row justify-content-center">
                  <div class="col-lg-3 order-lg-2">
                    <div class="card-profile-image img__wrap">
                      <img
                        src="https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-4.jpg"
                        class="rounded-circle img__img"
                        alt=""
                      />
                      <p class="img__description">Edit</p>
                    </div>
                  </div>
                </div>
                <div class="card-body pt-0 pt-md-4">
                  <div class="row">
                    <div class="col">
                      <div class="card-profile-stats d-flex justify-content-center mt-md-5">
                        <div>
                          <span class="heading">22</span>
                          <span class="description">Friends</span>
                        </div>
                        <div>
                          <span class="heading">10</span>
                          <span class="description">Photos</span>
                        </div>
                        <div>
                          <span class="heading">89</span>
                          <span class="description">Comments</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="text-center">
                    <h3>
                      Jessica Jones<span class="font-weight-light">, 27</span>
                    </h3>
                    <div class="h5 font-weight-300">
                      <i class="ni location_pin mr-2"></i>Bucharest, Romania
                    </div>
                    <div class="h5 mt-4">
                      <i class="ni business_briefcase-24 mr-2"></i>Solution
                      Manager - Creative Tim Officer
                    </div>
                    <div>
                      <i class="ni education_hat mr-2"></i>University of
                      Computer Science
                    </div>
                    <hr class="my-4" />
                    {customer.customer.bio ? (
                      <p>{customer.customer.bio}</p>
                    ) : (
                      "Write something about yourself."
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-8 order-xl-1">
              <div class="card bg-secondary shadow">
                <BasicTabs
                  itemOne="My account"
                  itemTwo="Settings"
                  two={<Settings customer={customer.customer} />}
                  one={<PostCard />}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerProfile;
