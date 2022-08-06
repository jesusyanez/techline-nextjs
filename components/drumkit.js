import React from "react";
import Link from "next/link";

const Drumkits = ({ drumkit }) => {
  return (
    <tr>
      <th>
        <label>
          <input type="checkbox" class="checkbox" />
        </label>
      </th>
      <td>
        <div class="flex items-center space-x-3">
          <div>
            <div class="font-bold text-success">{drumkit.upvotes}</div>
          </div>
        </div>
      </td>
      <td>
        <Link href={drumkit.reddit}>
          <a className="">{drumkit.title}</a>
        </Link>
        <br />
        <Link href={drumkit.link}>
          <button class="btn btn-ghost btn-xs normal-case text-info">
            {drumkit.link}
          </button>
        </Link>
      </td>
    </tr>
  );
};

export default Drumkits;
