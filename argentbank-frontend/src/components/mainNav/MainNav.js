import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserCircle,
  faUserPlus,
  faSignOutAlt,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { actionResetStore } from "../../app/actions/resetStore.action";
import { actionOffEditProfile } from "../../app/actions/editProfileStatus.action";
import NavLogo from "../navLogo/NavLogo";

const MainNav = () => {
  const dispatch = useDispatch();
  const { connection } = useSelector((state) => state.login);
  const { profileData, profileStatus, profileMessage } = useSelector(
    (state) => state.profile
  );

  return (
    <nav className="main-nav">
      <NavLogo />

      {connection !== "online" ? (
        <div className="main-nav-items">
          <NavLink
            className={(nav) =>
              nav.isActive ? "main-nav-item--active" : "main-nav-item"
            }
            end
            to="/login"
            onClick={() => actionResetStore(dispatch)}
          >
            <FontAwesomeIcon icon={faUserCircle} />
            {" Sign In"}
          </NavLink>
          <NavLink
            className={(nav) =>
              nav.isActive ? "main-nav-item--active" : "main-nav-item"
            }
            end
            to="/signup"
            onClick={() => actionResetStore(dispatch)}
          >
            <FontAwesomeIcon icon={faUserPlus} />
            {" Sign Up"}
          </NavLink>
        </div>
      ) : (
        <div className="main-nav-items">
          {profileStatus !== 200 ? (
            <NavLink className={"main-nav-item--error"} end to="/profile">
              <FontAwesomeIcon icon={faTriangleExclamation} />
              {" " + profileMessage}
            </NavLink>
          ) : (
            <NavLink
              className={(nav) =>
                nav.isActive ? "main-nav-item--active" : "main-nav-item"
              }
              end
              to="/profile"
              onClick={() => actionOffEditProfile(dispatch)}
            >
              <FontAwesomeIcon icon={faUserCircle} />
              {" " + profileData.firstName}
            </NavLink>
          )}
          <NavLink
            className="main-nav-item"
            end
            to="/"
            onClick={() => actionResetStore(dispatch)}
          >
            <FontAwesomeIcon icon={faSignOutAlt} />
            {" Sign Out"}
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default MainNav;
