import { Outlet, Link } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import DrawerContent from "../components/DrawerContent";
import AnnouncementBar from "../components/AnnouncmentBar";

export default function Layout() {
  return (
    <div className="drawer drawer-end">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col bg-alto">
        {/* Navbar */}
        <div className="navbar flex-col bg-transparent p-0 w-full">
          <AnnouncementBar />
          <Navbar />
          <div className="flex-none xl:hidden">
            {/* <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label> */}
          </div>
        </div>
        {/* Page content here */}
        <main style={{ padding: "20px" }}>
        <Outlet /> {/* This is where nested pages will render */}
      </main>

        <Footer />
        
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu bg-base-200 min-h-full w-80 rounded-tl-20 rounded-bl-20">
          {/* Sidebar content here */}
          {/* <li><a>Sidebar Item 1</a></li>
          <li><a>Sidebar Item 2</a></li> */}
          <DrawerContent />

        </ul>
      </div>
    </div>
  );
}
