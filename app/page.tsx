import { Button } from "@/components/ui/button";
import Image from "next/image";
import mediPlusLogo from "./assets/icons/logo-full.svg"
import PateintFrom from "@/components/forms/PatientForm";
import Link from "next/link";
export default function Home() {
  return (
    <div className="flex h-screen max-h-screen">
      {/* todo: otp verification i.e. passkey model */}
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px]">
          <Image
            src="./assets/icons/logo-full.svg"
            width={1000}
            height={1000}
            alt="Medi-Plus"
          />
          <PateintFrom/>
          <div className="text-14-regular mt-20 flex justify-between">
            <p className="justify-items-end text-dark-600 xl:text-left">
            © 2024 CarePulse
            </p>
            <Link href="/?admin=true" className="text-green-500">
            Admin
            </Link>
          </div>
        </div>
      </section>
      <Image
        src="/assets/images/onboarding-img.png"
        alt="doctor-img"
        height={1000}
        width={1000}
        className="side-img max-w-[50%]"
      />
    </div>
  );
}
