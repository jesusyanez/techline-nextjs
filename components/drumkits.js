import React from "react";

import Drumkit from "./drumkit";

const Drumkits = ({ drumkits }) => {
  return (
    <div className="h-full overflow-y-scroll rounded-lg mx-10 ">
      <div class="overflow-x-auto w-full">
        <table class="table table-compact w-full text-black">
          {/* Table Head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" class="checkbox" />
                </label>
              </th>
              <th>Votes</th>
              <th>Drumkit</th>
            </tr>
          </thead>
          <tbody>
            {/* Map table rows */}
            {drumkits.map((drumkit) => (
              <Drumkit drumkit={drumkit} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Drumkits;
