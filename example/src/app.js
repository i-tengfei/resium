import React from "react";
import { hot } from "react-hot-loader";
import { Cartesian3 } from "cesium";
import { Viewer, Entity } from "resium";

const App = () => (
  <Viewer className="full">
    <Entity
      name="Tokyo"
      position={Cartesian3.fromDegrees(139.767052, 35.681167, 100)}
      point={{ pixelSize: 10 }}>
      <h1>Hello, world.</h1>
    </Entity>
  </Viewer>
);

export default hot(module)(App);