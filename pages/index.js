import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Content from "../components/content";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Drumkits from "../components/drumkits";
import articlesJson from "../data/articles_short.json";
import React from "react";
import { useEffect, useState } from "react";

const ARTICLE_API_URL = "http://localhost:3000/api/articles";

const drumkitJson = [
  {
    title:
      "Some Epson Printers Are Programmed to Stop Working After a Certain Amount of Use | Users are receiving error messages that their fully functional printers are suddenly in need of repairs.",
    date: "08/08/22",
    url: "https://gizmodo.com/epson-printer-end-of-service-life-error-not-working-dea-1849384045",
  },
  {
    title: "Switzerland develops underground hydroelectric power",
    date: "08/08/22",
    url: "https://www.emergingrisks.co.uk/switzerland-develops-underground-hydroelectric-power/",
  },
  {
    title:
      "AI systems can’t patent inventions, US federal circuit court confirms | ‘There is no ambiguity,’ says judge",
    date: "08/08/22",
    url: "https://www.theverge.com/2022/8/8/23293353/ai-patent-legal-status-us-federal-circuit-court-rules-thaler-dabus",
  },
  {
    title: "Hacker Finds Kill Switch for Submachine Gun Wielding Robot Dog",
    date: "08/08/22",
    url: "https://www.vice.com/en/article/akeexk/hacker-finds-kill-switch-for-submachine-gun-wielding-robot-dog",
  },
  {
    title:
      "San Diego Citizens Wrest Control of Surveillance Tech Away From Police | Organizers in San Diego have secured a major win after a long fight against unbridled police surveillance.",
    date: "08/08/22",
    url: "https://gizmodo.com/san-diego-citizens-wrest-control-of-surveillance-tech-a-1849378881",
  },
  {
    title:
      "Meta's AI chatbot has some election-denying, antisemitic bugs to work out",
    date: "08/08/22",
    url: "https://www.businessinsider.com/meta-ai-chatbot-blenderbot-election-denying-antisemitic-bugs-artificial-intellignce-2022-8",
  },
  {
    title:
      "Malcolm Gladwell slammed after criticizing WFH policies—despite having worked remotely for decades",
    date: "08/08/22",
    url: "https://fortune.com/2022/08/08/malcolm-gladwell-slammed-after-criticizing-wfh-policies-despite-having-worked-remotely-for-decades/",
  },
  {
    title: "Less than 1% of Netflix subscribers are playing its games",
    date: "08/08/22",
    url: "https://9to5mac.com/2022/08/08/netflix-games-few-subscribers/",
  },
  {
    title:
      "Amazon bought the company that makes the Roomba. Anti-trust researchers and data privacy experts say it's 'the most dangerous, threatening acquisition in the company's history'",
    date: "08/08/22",
    url: "https://www.businessinsider.com/amazon-roomba-vacuums-most-dangerous-threatening-acquisition-in-company-history-2022-8?utm_source=feedly&utm_medium=webfeeds",
  },
  {
    title:
      "Microsoft blocks Tutanota users from registering a Microsoft Teams account and Microsoft won't change this. This demonstrates why stronger antitrust legislation is badly needed.",
    date: "08/08/22",
    url: "https://tutanota.com/blog/posts/microsoft-blocks-tutanota-users-from-own-service",
  },
  {
    title:
      "Dozens of fake news websites and social media accounts pushed pro-China talking points, report says",
    date: "08/08/22",
    url: "https://www.cnbc.com/2022/08/05/dozens-of-fake-news-websites-and-social-media-accounts-pushed-pro-china-talking-points.html",
  },
  {
    title: "Amazon to buy the company behind the Roomba in a $1.7 billion deal",
    date: "08/08/22",
    url: "https://edition.cnn.com/2022/08/05/tech/amazon-irobot-roomba/index.html",
  },
  {
    title:
      "Video game giants had a miserable second quarter as the pandemic gaming boom hits a wall",
    date: "08/08/22",
    url: "https://www.cnbc.com/2022/08/08/microsoft-xbox-sony-playstation-nintendo-video-game-earnings-round-up.html",
  },
  {
    title:
      'Would "artificial superintelligence" lead to the end of life on Earth? It\'s not a stupid question',
    date: "08/08/22",
    url: "https://www.salon.com/2022/08/06/would-artificial-superintelligence-lead-to-the-end-of-life-on-earth-its-not-a-stupid-question/",
  },
  {
    title: "Amazon’s Roomba Deal Is Really About Mapping Your Home",
    date: "08/08/22",
    url: "https://www.bloomberg.com/news/articles/2022-08-05/amazon-s-irobot-deal-is-about-roomba-s-data-collection",
  },
  {
    title:
      "India's rocket fails to put satellites in right orbit in debut launch",
    date: "08/07/22",
    url: "https://www.space.com/india-sslv-rocket-first-launch",
  },
  {
    title:
      "The Unsung Inventor Who Chased The LED Rainbow | LEDs Came Only In Shades Of Red — Until George Craford Expanded The Palette",
    date: "08/07/22",
    url: "https://spectrum.ieee.org/yellow-led-inventor",
  },
  {
    title:
      "Delaware Will Install Free Solar Panels For Low-income Residents and Paying 70% For Moderate-incomes",
    date: "08/07/22",
    url: "https://www.goodnewsnetwork.org/delaware-gives-free-solar-to-low-income-residents/",
  },
  {
    title:
      "Nvidia RTX 3090 Ti slashed by $1,000 in another clear sign that GPU prices are tumbling",
    date: "08/07/22",
    url: "https://www.techradar.com/news/nvidia-rtx-3090-ti-slashed-by-dollar1000-in-another-clear-sign-that-gpu-prices-are-tumbling",
  },
  {
    title:
      "U.S. Automakers Say 70% of EV Models Would Not Qualify for Tax Credit Under Senate Bill",
    date: "08/07/22",
    url: "https://money.usnews.com/investing/news/articles/2022-08-05/u-s-auto-trade-group-warns-ev-tax-proposal-would-make-70-ineligible",
  },
  {
    title:
      "Apple asks suppliers in Taiwan to label products as made in China – report",
    date: "08/07/22",
    url: "https://www.theguardian.com/technology/2022/aug/07/apple-asks-suppliers-in-taiwan-to-label-products-as-made-in-china-report",
  },
  {
    title:
      "Friendly reminder: Your phone’s water resistance rating doesn't mean much",
    date: "08/07/22",
    url: "https://www.androidauthority.com/water-resistant-phone-warning-3192071/",
  },
  {
    title:
      "The ‘Switchblade’ Flying Car Is Ready For Takeoff | A plane you can park in your garage and drive to the airport has been approved by the FAA for flight.",
    date: "08/07/22",
    url: "https://www.maxim.com/rides/the-switchblade-flying-car-is-ready-for-takeoff/",
  },
  {
    title:
      "Proprietary USB-C fast charging was once a necessary evil, now it's just evil",
    date: "08/07/22",
    url: "https://www.androidauthority.com/proprietary-fast-charging-3192175/",
  },
  {
    title:
      "Dead Solar Panels Are About to Become a Lot More Valuable – a $2.7 Billion Market by 2030",
    date: "08/07/22",
    url: "https://www.goodnewsnetwork.org/dead-solar-panels-are-about-to-become-a-lot-more-valuable-a-2-7-billion-market-by-2030/",
  },
  {
    title: "Flight tracking exposure irks billionaires and baddies",
    date: "08/07/22",
    url: "https://techxplore.com/news/2022-08-flight-tracking-exposure-irks-billionaires.html",
  },
  {
    title:
      "VR is as good as psychedelics at helping people reach transcendence",
    date: "08/07/22",
    url: "https://archive.ph/9tygJ#selection-317.0-317.67",
  },
  {
    title: "The internet is a misinformation superhighway",
    date: "08/07/22",
    url: "https://chicago.suntimes.com/columnists/2022/8/6/23292040/internet-misinformation-superhighway-conspiracy-theories-qanon-column-gene-lyons",
  },
  {
    title: "Toyota offers to buy back its recalled bZ4X electric SUVs",
    date: "08/06/22",
    url: "https://www.theverge.com/2022/8/6/23294791/toyota-offering-buy-back-recalled-bz4x-ev",
  },
  {
    title: "AI seems to have discovered alternate physics on it's own",
    date: "08/06/22",
    url: "https://www.sciencealert.com/ai-has-discovered-alternate-physics-on-its-own",
  },
];

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
