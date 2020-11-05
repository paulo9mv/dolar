import React from "react";
import { useDispatch } from "react-redux";
import { fetchApi } from "../store/reducer";

export function Content() {
  const dispatch = useDispatch();

  dispatch(fetchApi())

  return (
    <div>
      Hello World
    </div>
  );
}