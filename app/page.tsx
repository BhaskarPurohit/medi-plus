import { Button } from "@/components/ui/button";
import Image from "next/image";
import mediPlusLogo from "./medi-plus-logo.png"
export default function Home() {
  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px]">
          <Image
            src={mediPlusLogo}
            alt="Medi-Plus"
          />
        </div>
      </section>
    </div>
  );
}
