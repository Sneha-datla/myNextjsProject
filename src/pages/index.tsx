import Image from "next/image";

import { Inter } from "next/font/google";
import SearchHeader from "@/components/SearchHeader";
import HeaderNav from "@/components/HeaderNav";
import SwiperBanner from "@/components/SwiperBanner";
import FeatureArea from "@/components/FeatureArea";
import FeaturedGrocery from "@/components/FeaturedGrocery";
import ProductWithDiscount from "@/components/ProductWithDiscount";
import WeeklySellings from "@/components/WeeklySellings";
import WeekendDiscount from "@/components/WeekendDiscount";
import TopTrendingProducts from "@/components/TopTrendingProducts";
import BlogInsights from "@/components/BlogInsights";
import Footer from "@/components/Footer";
import HeaderTop from "@/components/HeaderTop";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
   <>

<HeaderTop></HeaderTop>
<SearchHeader></SearchHeader>
   <HeaderNav></HeaderNav>
   <SwiperBanner></SwiperBanner>
<FeatureArea></FeatureArea>
<FeaturedGrocery></FeaturedGrocery>
<ProductWithDiscount></ProductWithDiscount>
<WeeklySellings></WeeklySellings>
<WeekendDiscount></WeekendDiscount>
<TopTrendingProducts></TopTrendingProducts>
<BlogInsights></BlogInsights>
<Footer></Footer>
   </>
  );
}
