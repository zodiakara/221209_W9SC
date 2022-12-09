const MySidebar = () => {
  return (
    <div className="navbar-custom d-none d-lg-block d-xl-block d-xxl-block">
      <ul className="navbar-nav">
        <li className="nav-item my-3">
          <div className="text-light heading d-flex align-items-center justify-content-flex-start mt-3">
            <i className="fa-brands fa-spotify mx-3 p-1" /> Spotify
          </div>
        </li>
        <li className="nav-item ">
          <button
            type="button"
            className="btn w-100 h-50 py-md-2 text-light button-hover text-left d-flex align-items-center justify-content-around"
            style={{ height: "60px" }}
          >
            <i className="fa-solid fa-house mx-3" />
            <div className="w-75 d-flex">
              <a className="gotohome" href="/index.html">
                Home
              </a>
            </div>
          </button>
        </li>
        <li className="nav-item">
          <button
            type="button"
            className="btn w-100 h-50 py-md-2 text-light button-hover text-left d-flex align-items-center justify-content-around"
            style={{ height: "60px" }}
          >
            <i className="fa-solid fa-magnifying-glass mx-3" />
            <div className="w-75 d-flex">
              <a className="gotohome" href="../Search/search.html">
                Search
              </a>
            </div>
          </button>
        </li>
        <li className="nav-item">
          <button
            type="button"
            className="btn w-100 h-50 py-md-2 text-light button-hover text-left d-flex align-items-center justify-content-around"
            style={{ height: "60px" }}
          >
            <i className="fa-regular fa-bookmark mx-3" />
            <div className="w-75 d-flex">Your Library</div>
          </button>
        </li>
        <li className="nav-item margin-top">
          <button
            type="button"
            className="btn w-100 h-50 py-md-2 text-light button-hover text-left d-flex align-items-center justify-content-around"
            style={{ height: "60px" }}
          >
            <i className="fa-solid fa-plus mx-2" />
            <div className="w-75 d-flex">Create Playlist</div>
          </button>
        </li>
        <li className="nav-item">
          <button
            type="button"
            className="btn w-100 h-50 py-md-2 text-light button-hover text-left d-flex align-items-center justify-content-around"
            style={{ height: "60px" }}
          >
            <i className="fa-solid fa-heart mx-2" />
            <div className="w-75 d-flex">Liked Songs</div>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default MySidebar;
