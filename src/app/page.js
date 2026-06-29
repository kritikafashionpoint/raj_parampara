import Banner from "./home/Banner";
import FAQ from "./home/Faq";
import MobileBanner from "./home/MobileBanner";
import NewArr from "./home/NewArr";
import Shopbycategory from "./home/ShopByCategory";
import TopSelling from "./home/TopSelling";
import WhyChooseUs from "./home/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Banner />
      <MobileBanner />
      <Shopbycategory />
      <NewArr />
      <TopSelling/>
      <WhyChooseUs />
      <FAQ />

    </>
  );
}
