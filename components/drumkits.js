import React from "react";

import Drumkit from "./drumkit";

const Drumkits = ({ drumkits }) => {
  return (
    <div className="h-full overflow-y-scroll scrollbar-hide rounded-lg mx-10 ">
      <div className="overflow-x-auto w-full">
        {drumkits.map((drumkit) => (
          <Drumkit drumkit={drumkit} />
        ))}
      </div>
    </div>
  );
};

export default Drumkits;
