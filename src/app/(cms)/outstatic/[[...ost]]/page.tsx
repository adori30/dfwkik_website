import "outstatic/outstatic.css";
import { Outstatic } from "outstatic";
import { OstClient } from "outstatic/client";
import React from "react";

export default async function Page({ params }: { params: { ost: string[] } }) {
  const ostData = await Outstatic();
  return <OstClient ostData={ostData} params={params} />;
}
