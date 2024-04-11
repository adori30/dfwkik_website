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
  const data = await getData(params);
  console.log("setting: " + data.content);
  return (
    <div className="h-screen">
      <div>Content for {params.slug}</div>
      <h2>Title: {data.title}</h2>
      <div
        className="markdown-to-html"
        dangerouslySetInnerHTML={{ __html: data.content }}
      ></div>
    </div>
  );
}
