import React from "react";
import { HashRouter, Route } from "react-router-dom";

import Home from "./components/Home";
import ArtistMain from "./components/artists/ArtistMain";
import ArtistDetail from "./components/artists/ArtistDetail";
import ArtistCreate from "./components/artists/ArtistCreate";
import ArtistEdit from "./components/artists/ArtistEdit";

const Routes = () => {
  return (
    <HashRouter>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="artists/new" component={ArtistCreate} />
        <Route path="artists/:id" component={ArtistDetail} />
        <Route path="artists/:id/edit" component={ArtistEdit} />
        <Route path="artists" component={ArtistMain} />
      </div>
    </HashRouter>
  );
};

export default Routes;
