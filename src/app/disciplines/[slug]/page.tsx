import markdownToHtml from "@/lib/markdown-to-html";
import { getDocumentBySlug, getDocumentSlugs } from "outstatic/server";

async function getData(params: { slug: string }) {
  const discipline = getDocumentBySlug("content", params.slug, [
    "title",
    "content",
  ]);

  console.log(discipline);

  const content = await markdownToHtml(discipline?.content || "");

  return {
    title: discipline?.title,
    content,
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
  const {title, content} = await getData(params);
  return (
    <div className="h-screen p-16 flex flex-col">
      <div className="text-7xl font-extralight my-16">{title}</div>
      <div
        className="markdown-to-html h-full mb-8 bg-slate-300 text-slate-800 p-10"
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
    </div>
  );
}
