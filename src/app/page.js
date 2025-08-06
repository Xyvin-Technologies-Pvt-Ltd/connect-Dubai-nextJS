import Body from "@/Components/BodyContents/Body";
import Header from "@/Components/Header/Header";
import PopUpInHeader from "@/Components/Header/PopUpInHeader";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white">
      <PopUpInHeader />
      <Header />
      <Body />
    </div>
  );
}
