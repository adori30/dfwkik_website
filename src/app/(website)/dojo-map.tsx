/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

export default function DojoMap() {
  return (
    <Zoom>
      <img
        alt="Map of the dojo location"
        src="/greenhill_map.jpg"
        className="h-44 md:h-96"
      />
    </Zoom>
  );
}
