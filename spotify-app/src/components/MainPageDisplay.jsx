import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSongsAction } from "../redux/actions/actions";
import SongCard from "./SongCard";

const MainPageDisplay = () => {
  const dispatch = useDispatch();
  const songDisplay = useSelector((state) => state.getSongs.songList);

  useEffect(() => {
    dispatch(getSongsAction("queen"));
  }, []);

  return (
    <div
      class="row row-cols-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-5 g-xl-2 g-xxl-3"
      id="topsidecards"
    >
      {songDisplay.map((song) => (
        <SongCard song={song} />
      ))}
    </div>
  );
};
export default MainPageDisplay;
