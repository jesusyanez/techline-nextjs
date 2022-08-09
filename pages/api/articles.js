// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import data from "../../data/articles_desc.json";

export default function handler(req, res) {
  res.status(200).send(data);
}
