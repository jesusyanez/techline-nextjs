import Head from "next/head";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Drumkits from "../components/drumkits";
import React from "react";
import { useEffect, useState } from "react";

const ARTICLE_API_URL = "https://techline.vercel.app/api/articles";

async function fetchArticles(updateCb) {
  const res = await fetch(ARTICLE_API_URL);
  const json = await res.json();

  updateCb(json);

  console.log({ json });
}

export default function Home() {
  const [articleList, updateArticles] = useState([]);

  useEffect(() => {
    fetchArticles(updateArticles);
  }, []);

  return (
    <div>
      <Head>
        <title>Tech Line</title>
        <meta name="description" content="Breaking tech news" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col h-screen justify-between bg-primary">
        <div className="sticky top-0 blue">
          <Navbar />
        </div>
        <div className="h-3/4">
          {/* <Content /> */}
          <Drumkits drumkits={articleList} />
        </div>
        <Footer />
      </div>
    </div>
  );
}
