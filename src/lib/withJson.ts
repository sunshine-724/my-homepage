import type { NextApiHandler, NextApiRequest, NextApiResponse } from "next";

// bodyParserを無効化している場合に、JSONを手動でパースするミドルウェア

async function parseJson(req: NextApiRequest) {
  return new Promise((resolve, reject) => {
    let data = "";
    req.on("data", (chunk) => {
      data += chunk;
    });
    req.on("end", () => {
      try {
        resolve(JSON.parse(data));
      } catch (err) {
        reject(err);
      }
    });
    req.on("error", reject);
  });
}

export function withJson(handler: NextApiHandler): NextApiHandler {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const contentType = req.headers["content-type"] || "";

    // JSON だけ自動パース
    if (contentType.includes("application/json")) {
      try {
        req.body = await parseJson(req);
      } catch {
        return res.status(400).json({ error: "Invalid JSON" });
      }
    }

    return handler(req, res);
  };
}
