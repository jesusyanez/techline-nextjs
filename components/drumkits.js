import React from "react";

import Drumkit from "./drumkit";

const Drumkits = ({ drumkits }) => {
  return (
    <div className="h-full overflow-y-scroll scrollbar-hide rounded-lg mx-10 ">
      <div class="overflow-x-auto w-full">
        {/* <table class="table table-compact w-full text-black">
          <thead>
            <tr>
              <th>Articles</th>
            </tr>
          </thead>
          <tbody>
            {drumkits.map((drumkit) => (
              <Drumkit drumkit={drumkit} />
            ))}
          </tbody>
        </table> */}
        {drumkits.map((drumkit) => (
          <Drumkit drumkit={drumkit} />
        ))}
      </div>
    </div>
  );
};

export default Drumkits;
