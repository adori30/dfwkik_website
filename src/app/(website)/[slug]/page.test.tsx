import { getDocumentBySlug, getDocumentSlugs } from "outstatic/server";
import DisciplinePage from "./page";
import { render, fireEvent, screen } from "@testing-library/react";
import { markdownToHtml } from "@/lib/markdown-to-html";

jest.mock("outstatic/server", () => ({
  getDocumentBySlug: jest.fn(),
  getDocumentSlugs: jest.fn(),
}));
jest.mock("../../../lib/markdown-to-html", () => ({
  markdownToHtml: jest.fn(),
}));

it("renders replacing youtube video placeholders", async () => {
  const markdownToHtmlStub = markdownToHtml as jest.Mock;
  const getDocumentBySlugStub = getDocumentBySlug as jest.Mock;
  getDocumentBySlugStub.mockReturnValue({
    title: "Test Page",
    content: "Dummy content",
    coverImage: "/site_banner.jpg",
  });
  markdownToHtmlStub.mockResolvedValue("<div>{{youtube_embed:1234ABCD}}</div>");

  const serverComponent = await DisciplinePage({
    params: { slug: "dummy_slug" },
  });

  expect(getDocumentBySlugStub).toHaveBeenCalledWith("content", "dummy_slug", [
    "title",
    "content",
    "coverImage",
  ]);
  expect(markdownToHtmlStub).toHaveBeenCalledWith("Dummy content");
  const { getByText, getByTestId } = render(serverComponent);
  
  const title = getByText("Test Page");
  expect(title).toBeTruthy();
  
  const iframe = getByTestId("youtube_iframe")
  expect(iframe).toBeTruthy();
  expect(iframe.getAttribute('src')).toBe('https://www.youtube.com/embed/1234ABCD')
});
