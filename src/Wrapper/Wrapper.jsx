import { Outlet } from "react-router-dom";

export const Wrapper = () => {
  return (
    <>
      <h1>Header</h1>

      <Outlet />
    </>
  );
};
