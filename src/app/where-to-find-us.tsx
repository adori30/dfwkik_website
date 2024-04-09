/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

export default function WhereToFindUs() {
  return (
    <div className="m-4 flex flex-col justify-between md:mb-12 md:h-96 md:flex-row">
      <div className="content-center md:pl-16 md:pr-16 text-xl font-extralight md:w-1/2 md:text-2xl">
        <div>
          We practice at Greenhill School. It is located on the North West
          corner of of Midway and Spring Valley. Practice is held in the Main
          Gymnasium (Indicated by H), best accessed from the Hornet Drive
          entrance off of Midway (Indicated by O).
        </div>
        <div className="mt-12 underline">
          <Link href={"https://maps.app.goo.gl/D13em6GkePDxQCyT7"}>
            4141 Spring Valley Rd. Addison, Texas 75001
          </Link>
        </div>
      </div>
      <div className="flex flex-row content-end justify-center md:h-96 md:w-1/2 md:justify-end">
        <Zoom>
          <img
            alt="Map of the dojo location"
            src="/greenhill_map.jpg"
            className="m-4 h-44 md:h-96"
          />
        </Zoom>
      </div>
    </div>
  );
}
