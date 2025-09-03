"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";

const Header = () => {
  const [navbar, setNavbar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  }, []);

  return (
    <header
      className={`main-header ${
        navbar ? "fixed-header animated slideInDown" : ""
      }`}
    >
      <div className="container-fluid">
        {/* <!-- Main box --> */}
        <div className="main-box">
          {/* <!--Nav Outer --> */}
          <div className="nav-outer">
            <div className="logo-box">
              <div className="logo">
                <Link href="/" className="noSticky">
                  <Image
                    width={154}
                    height={50}
                    src={
                      require("@/public/images/jobfinder-logo.png").default ||
                      "/images/jobfinder-logo.png"
                    }
                    alt="JobFinder logo"
                    title="JobFinder"
                    style={{ width: 'auto', height: 'auto' }}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "/images/logo.svg";
                    }}
                  />
                </Link>
                <Link href="/" className="isSticky">
                  <Image
                    width={154}
                    height={50}
                    src={
                      require("@/public/images/jobfinder-logo.png").default ||
                      "/images/jobfinder-logo.png"
                    }
                    alt="JobFinder logo"
                    title="JobFinder"
                    style={{ width: 'auto', height: 'auto' }}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "/images/logo.svg";
                    }}
                  />
                </Link>
              </div>
            </div>
          </div>
          {/* End nav-outer */}

          <div className="outer-box">
            {/* <!-- Login/Register --> */}
            <div className="btn-box"></div>
          </div>
          {/* End outer-box */}
        </div>
      </div>
    </header>
  );
};

export default Header;
