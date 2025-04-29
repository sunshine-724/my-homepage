import { NextApiRequest, NextApiResponse } from "next";
import { BetaAnalyticsDataClient } from "@google-analytics/data";

const propertyId = process.env.PROPERTY_ID; // プロパティID

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const credentials = JSON.parse(
            Buffer.from(process.env.GOOGLE_CREDENTIALS_BASE64 || "", "base64").toString("utf8")
        );

        const analyticsDataClient = new BetaAnalyticsDataClient({ credentials });

        const [response] = await analyticsDataClient.runReport({
            property: `properties/${propertyId}`,
            dateRanges: [
                {
                    startDate: "2025-04-01",//取得したい期間を設定
                    endDate: "today"
                }
            ],
            dimensions: [
                {
                    name: "pagePath" //ページのパスを取得
                }
            ],
            metrics: [
                {
                    name: "screenPageViews" // PV数を取得
                }
            ]
        });

        if (response.rows) {
            const rankingData = response.rows.map((row) => ({
                pagePath: row.dimensionValues?.[0]?.value ?? "",
                uniquePageviews: row.metricValues?.[0]?.value ?? "0"
            }));

            res.status(200).json(rankingData);
        } else {
            res.status(204).json({ message: "No data available" });
        }
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ statusCode: 500, message: error.message });
        }
        else {
            res.status(500).json({ statusCode: 500, message: "Unknown error" });
        }
    }
}
