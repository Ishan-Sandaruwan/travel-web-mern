import React from "react";
import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";

export default function Footer() {
  return (
    <div className="bg-gradient-to-r from-emerald-300 to-lime-400 p-4">
      <div className="mb-4 flex flex-col sm:flex-row justify-between gap-8 items-start px-2 ">
        <span className="md:text-2xl font-bold text-white bg-gradient-to-r from-green-400 to-blue-500 p-2 rounded-md shadow-md hover:to-lime-400 transition-transform cursor-pointer whitespace-nowrap">
          Travel Guider
        </span>
        <div className="text-lime-800 drop-shadow max-w-md">
          <h4 className="text-lime-950 font-semibold">More About Company</h4>
          <p className="text-sm">
            ks dbsd lsjhd cljhs dcljhs dc sdlccjh sljdh clsjhd dc. sdlhclsd c
            sdc. sdjkjnslkdj c sdcc.kwjjdfs wlksjfdsfdsd .sdfhsdfksd sdjh sjhdc
            csjhsd s.sdfb sjhd csd.shjdbcsjkd ssldjc ls dll.sdvhsdjv lsjd vls
            llskjd ssh. sdj lsid is sldhj ljhshd . lsh xcs ljhsdc sdc. sjhdc s
            lhsdh ch lidssdvvc.
          </p>
        </div>
        <div className="font-semibold flex flex-col lg:flex-row justify-evenly gap-4 text-lime-800 drop-shadow ">
          <span className="hover:translate-x-2 transition-transform cursor-pointer md:text-base text-sm">
            About
          </span>
          <span className="hover:translate-x-2 transition-transform cursor-pointer md:text-base text-sm">
            Privacy Policy
          </span>
          <span className="hover:translate-x-2 transition-transform cursor-pointer md:text-base text-sm">
            Licensing
          </span>
          <span className="hover:translate-x-2 transition-transform cursor-pointer md:text-base text-sm">
            Contact
          </span>
        </div>
        <div>
          <h4 className="text-lime-950 font-semibold mb-3">Contact Information</h4>
          <ul className="text-sm flex flex-col gap-2 ">
            <li>0761522239</li>
            <li>sandaruwwan0427@gmail.com</li>
            <li>Palugaswela, Kanaththewewa, 60422</li>
          </ul>
        </div>
      </div>
      <hr className="" />
      <div className="mt-4 flex justify-between items-center">
        <div className="text-lime-950 drop-shadow-lg font-semibold">
          © 2024 Travel Guider™
        </div>
        <div className="flex gap-8 items-center">
          <h4 className="font-semibold">Keep Connected</h4>
          <BsFacebook className="text-3xl hover:-translate-x-2 transition-transform cursor-pointer" />
          <BsYoutube className="text-3xl hover:-translate-x-2 transition-transform cursor-pointer" />
          <BsInstagram className="text-3xl hover:-translate-x-2 transition-transform cursor-pointer" />
        </div>
      </div>
    </div>
  );
}
