import Image from "next/image";
import dragonLogo from "@/assets/dragon.png";

function Brand() {
  return <Image src={dragonLogo} alt="dragon-logo" width={25} />;
}

export default Brand;
