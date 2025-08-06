import About from "@/Components/About/About";
import Body from "@/Components/BodyContents/Body";
import Header from "@/Components/Header/Header";
import PopUpInHeader from "@/Components/Header/PopUpInHeader";
import ModernNetwordking from "@/Components/ModernNetworking/ModernNetwordking";
import WhoCanJoin from "@/Components/WhoCanJoin/WhoCanJoin";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white">
      <PopUpInHeader />
      <Header />
      <Body />
      <About />
      <ModernNetwordking />
      {/* <WhoCanJoin /> */}
    </div>
  );
}
