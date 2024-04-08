/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

export default function WhereToFindUs() {
  return (
    <div className="flex h-96 flex-col justify-between md:flex-row mr-4">
      <div className="bg-pi w-1/2 content-center pl-16 pr-16 text-2xl font-extralight">
        <div>
          We practice at Greenhill School. It is located on the North West corner of of Midway
          and Spring Valley. Practice is held in the Main Gymnasium (Indicated
          by H), best accessed from the Hornet Drive entrance off of Midway
          (Indicated by O).
        </div>
        <div className="mt-12 underline">
          <Link href={"https://goo.gl/maps/Ayx912EAdx5qYHQbA"}>
            4141 Spring Valley Rd. Addison, Texas 75001
          </Link>
        </div>
      </div>
      <div className="h-96 w-1/2 justify-end content-end flex flex-row">
        <Zoom>
          <img
          alt="Map of the dojo location"
          src="/greenhill_map.jpg"
          className="h-96"
        />
        </Zoom>
      </div>
    </div>
  );
}
