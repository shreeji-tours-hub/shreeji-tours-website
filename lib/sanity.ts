import { createClient } from "next-sanity";

export const client = createClient({
  dataset: "production",
  projectId: "5ghzcowi",
  apiVersion: "2026-09-08",
  useCdn: true,
});
