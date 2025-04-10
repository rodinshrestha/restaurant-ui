import React from "react";

import { withTheme } from "./utils/withTheme";

const App: React.FC = () => {
  return (
    <div style={{ padding: "20px", backgroundColor: "#f0f0f0" }}>
      <h1>Hello World</h1>
      <p>This is a test content</p>
    </div>
  );
};

export default withTheme(App);
