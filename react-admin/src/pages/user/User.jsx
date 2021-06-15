import React from "react";
import "./user.css";
import {
  PermIdentity,
  CalendarToday,
  PhoneAndroid,
  MailOutline,
  LocationSearching,
  Publish
} from "@material-ui/icons";
import {Link} from "react-router-dom";

export default function User() {
  return (<div className="user">
    <div className="userTitleContainer">
      <h1 className="userTitle">Edit User</h1>
      <Link to="/newUser">
        <button className="userAddButton">Create</button>
      </Link>
    </div>

    <div className="userContainer">
      <div className="userShow">
        <div className="userShowTop">
          <img src="/images/userProfile.jpg" alt="" className="userShowImg"/>
          <div className="userShowTopTitle">
            <span className="userShowUsername">Anna Backer</span>
            <span className="userShowUserTitle">Software Engineer</span>
          </div>
        </div>
        <div className="userShowBottom">
          <span className="userShowTitle">Account Details</span>
          <div className="userShowInfo">
            <PermIdentity className="userShowIcon"/>
            <span className="userShowInfoTitle">annabeck99</span>
          </div>
          <div className="userShowInfo">
            <CalendarToday className="userShowIcon"/>
            <span className="userShowInfoTitle">10-12-1988</span>
          </div>

          <span className="userShowTitle">Contact Details</span>
          <div className="userShowInfo">
            <PhoneAndroid className="userShowIcon"/>
            <span className="userShowInfoTitle">+1 123 456 26</span>
          </div>
          <div className="userShowInfo">
            <MailOutline className="userShowIcon"/>
            <span className="userShowInfoTitle">annabeck99@gmail.com</span>
          </div>
          <div className="userShowInfo">
            <LocationSearching className="userShowIcon"/>
            <span className="userShowInfoTitle">New York | USA</span>
          </div>
        </div>
      </div>
      <div className="userUpdate">
        <span className="userUpdateTitle">Edit</span>
        <form action="" className="userUpdateForm">
          <div className="userUpdateLeft">
            <div className="userUpdateItem">
              <label>Username</label>
              <input type="text" name="" id="" placeholder="annabeck99" className="userUpdateInput"/>
            </div>
            <div className="userUpdateItem">
              <label>Full Name</label>
              <input type="text" name="" id="" placeholder="Anna Backer" className="userUpdateInput"/>
            </div>
            <div className="userUpdateItem">
              <label>Email</label>
              <input type="email" name="" id="" placeholder="annabeck99@gmail.com" className="userUpdateInput"/>
            </div>
            <div className="userUpdateItem">
              <label>Phone</label>
              <input type="text" name="" id="" placeholder="+1 123 456 26" className="userUpdateInput"/>
            </div>
            <div className="userUpdateItem">
              <label>Address</label>
              <input type="text" name="" id="" placeholder="New York | USA" className="userUpdateInput"/>
            </div>
          </div>
          <div className="userUpdateRight">
            <div className="userUpdateUpload">
              <img className="userUpdateImg" src="/images/userProfile.jpg" alt=""/>
              <label htmlFor="file">
                <Publish className="userupdateIcon"/>
              </label>
              <input type="file" name="" id="file" style={{
                  display: "none"
                }}/>
            </div>
            <button className="userUpdateButton">Update</button>
          </div>
        </form>
      </div>
    </div>
  </div>);
}
