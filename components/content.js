import { useEffect, useState } from "react";
// import LiteYouTubeEmbed from 'react-lite-youtube-embed'
// import { AiFillYoutube } from "react-icons/ai"

const Content = () => {
  return (
    <div class="overflow-x-auto w-full">
      <table class="table w-full">
        {/* <!-- head --> */}
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" class="checkbox" />
              </label>
            </th>
            <th>Votes</th>
            <th>Drumkits</th>
          </tr>
        </thead>
        <tbody>
          {/* <!-- row 1 --> */}
          <tr>
            <th>
              <label>
                <input type="checkbox" class="checkbox" />
              </label>
            </th>
            <td>
              <div class="flex items-center space-x-3">
                <div>
                  <div class="font-bold text-green-400">7</div>
                </div>
              </div>
            </td>
            <td>
              Zemlak, Daniel and Leannon
              <br />
              <button class="btn btn-ghost btn-xs normal-case">
                https://drive.google.com/drive/folders/19hjIbaIQVfUJDlLtaHhcyKCQIUUkFIBF?usp=sharing
              </button>
            </td>
          </tr>
          {/* <!-- row 1 --> */}
          <tr>
            <th>
              <label>
                <input type="checkbox" class="checkbox" />
              </label>
            </th>
            <td>
              <div class="flex items-center space-x-3">
                <div>
                  <div class="font-bold text-green-400">7</div>
                </div>
              </div>
            </td>
            <td>
              Zemlak, Daniel and Leannon
              <br />
              <button class="btn btn-ghost btn-xs normal-case">
                https://drive.google.com/drive/folders/19hjIbaIQVfUJDlLtaHhcyKCQIUUkFIBF?usp=sharing
              </button>
            </td>
          </tr>
        </tbody>
        {/* <!-- foot --> */}
        <tfoot>
          <tr>
            <th></th>
            <th>Votes</th>
            <th>Drumkits</th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default Content;
