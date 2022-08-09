// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import data from "../../data/articles_desc.json";

// export default function handler(req, res) {
//   res.status(200).send(data);
// }

import NextCors from "nextjs-cors";

export default async function handler(req, res) {
  // Run the cors middleware
  // nextjs-cors uses the cors package, so we invite you to check the documentation https://github.com/expressjs/cors
  await NextCors(req, res, {
    // Options
    methods: ["GET"],
    origin: "*",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });

  // Rest of the API logic
  res.send(data);
}
