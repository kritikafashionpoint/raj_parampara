import Banner from "./home/Banner";
import MobileBanner from "./home/MobileBanner";
import NewArr from "./home/NewArr";
import Shopbycategory from "./home/ShopByCategory";
import WhyChooseUs from "./home/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Banner />
      <MobileBanner />
      <Shopbycategory />
      <WhyChooseUs />
      <NewArr />
    </>
  );
}
