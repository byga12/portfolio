import { Client } from "@notionhq/client";

export async function getProjectsList(filter) {
  const notion = new Client({ auth: process.env.NOTION_KEY });

  const databaseId = process.env.NOTION_DATABASE_ID;

  const response = await notion.databases.query({
    database_id: databaseId,
    filter,
  });
  return response.results;
}
