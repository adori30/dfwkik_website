import markdownToHtml from "@/lib/markdown-to-html";
import { getDocumentBySlug, getDocumentSlugs } from "outstatic/server";
import Image from "next/image";

async function getData(params: { slug: string }) {
  const discipline = getDocumentBySlug("content", params.slug, [
    "title",
    "content",
    "coverImage",
  ]);

  console.log(discipline);

  const content = await markdownToHtml(discipline?.content || "");

  return {
    title: discipline?.title,
    content,
    coverImage: discipline?.coverImage,
  };
}

export async function generateStaticParams() {
  const posts = getDocumentSlugs("content");
  return posts.map((slug) => ({ slug }));
}

export default async function DisciplinePage({
  params,
}: Readonly<{
  params: { slug: string };
}>) {
  const { title, content, coverImage } = await getData(params);
  return (
    <div className="flex h-screen flex-col">
      <div className="flex flex-row w-full relative">
        <div className="h-72 content-center w-1/2 z-20 text-7xl font-extralight bg-gradient-to-r from-black via-black/90 to-black/0 pl-8 pt-14">{title}</div>
        <div className="absolute left-0 z-10 right-0 h-full w-full">{coverImage && (
          <Image src={coverImage} alt="cover image" fill objectFit="cover" />
        )}</div>
      </div>
      <div
        className="markdown-to-html flex flex-col flex-grow z-20 relative bg-slate-300 p-10 text-slate-800 md:m-16 md:-mb-16 md:-top-24"
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
    </div>
  );
}
