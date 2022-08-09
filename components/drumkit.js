import React from "react";
import Link from "next/link";

const Drumkits = ({ drumkit }) => {
  return (
    <Link href={drumkit.url}>
      <div class="card w-full bg-base-100 shadow-xl mb-3 cursor-pointer transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-102 hover:bg-accent duration-300">
        <div class="card-body">
          <h2 class="card-title text-black">{drumkit.title}</h2>
          <p class="text-info truncate ...">{drumkit.url}</p>
        </div>
      </div>
    </Link>

    // <tr>
    //   <td>
    //     <Link href={drumkit.url}>
    //       <a className="font-bold">{drumkit.title}</a>
    //     </Link>
    //     <br />
    //     <Link href={drumkit.url}>
    //       <button class="btn btn-ghost btn-xs normal-case text-info">
    //         {drumkit.url.substring(0, 50)}...
    //       </button>
    //     </Link>
    //     <div class="font-bold text-accent">{drumkit.date}</div>
    //   </td>
    // </tr>
  );
};

export default Drumkits;
