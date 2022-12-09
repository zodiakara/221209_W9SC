import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getSongsAction } from "../redux/actions/actions";

const SearchPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSongsAction());
  }, []);

  return <div> well well well </div>;
};
export default SearchPage;
