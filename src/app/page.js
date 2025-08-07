import About from "@/Components/About/About";
import Body from "@/Components/BodyContents/Body";
import Header from "@/Components/Header/Header";
import PopUpInHeader from "@/Components/Header/PopUpInHeader";
import LetsConnect from "@/Components/LetsConnect/LetsConnect";
import ModernNetwordking from "@/Components/ModernNetworking/ModernNetwordking";
import UpcomingFeatures from "@/Components/UpcomingFeatures/UpcomingFeatures";
import WhoCanJoin from "@/Components/WhoCanJoin/WhoCanJoin";
import WhyJoinNow from "@/Components/WhyJoinNow/WhyJoinNow";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white">
      <PopUpInHeader />
      <Header />
      <Body />
      <About />
      <ModernNetwordking />
      <WhoCanJoin />
      <WhyJoinNow />
      <UpcomingFeatures />
      <LetsConnect/>
    </div>
  );
}
