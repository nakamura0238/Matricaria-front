import { Routes, Route } from "react-router-dom";
import { Top } from "../pages/top";
import { Create } from "../pages/create";
import { NotFound } from "../pages/404";
import { Event } from "../pages/event";
import { EventDetail } from "../pages/event/detail";
import { Edit } from "../pages/event/edit";
import { Info } from "../pages/event/info";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Top />} />
      <Route path="/create" element={<Create />} />
      <Route path="/event">
        <Route index element={<Event />} />
        <Route path=":eventId">
          <Route index element={<EventDetail />} />
          <Route path="edit" element={<Edit />} />
          <Route path="info" element={<Info />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
