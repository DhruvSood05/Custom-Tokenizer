import "dotenv/config";
import { OpenAI } from "openai";

const client = new OpenAI();

async function init() {
  const result = await client.embeddings.create({
    model: "text-embedding-3-small",
    input: "I have been enjoying learning new things lately",
    encoding_format: "float",
  });

  console.log(result.data);
  //   console.log(result.data[0].embedding.length);  - to get size of the array
}

init();
