const SongCard = ({ song }) => {
  return (
    <div className="col" id="top-buttons">
      <div className="background-card mb-3" style={{ maxWidth: "540px" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={song.album.cover}
              className="img-fluid rounded-start aspect-ratio-one-to-one"
              style={{ width: "100%" }}
              alt={song.title}
            />
          </div>
          <div className="col-md-8 d-flex align-items-center">
            <div className="card-body d-flex align-items-center justify-content-between">
              <p className="card-title text-truncate">{song.album.title}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SongCard;
