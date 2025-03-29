import { GitHub } from "@mui/icons-material";
import { Box, Typography, Button } from "@mui/material";

interface cautionProps {
    commonTopBoxStyles: {
        justifyContent: string;
        backgroundColor: string;
        width: { xs: string; md: string };
        height: { xs: string; md: string };
        borderRadius: string;
    };

    commonTextStyles: {
        color: string;
        fontSize: { xs?: string; sm?: string; md?: string; lg?: string }; //可変長
    };
}

const caution: React.FC<cautionProps> = ({ commonTopBoxStyles, commonTextStyles }) => {
    return (
        <Box sx={{ backgroundColor: "#40E0D0", width: { xs: "100%", md: "50%" }, height: { xs: "50%", md: "100%" }, borderRadius: "5px", }}>
            <Typography sx={{ ...commonTextStyles }}>
                注意事項
            </Typography>
            <Typography
                color="#ffffff"
                variant="body2"
                sx={{
                    whiteSpace: "pre-line", /*改行を反映させるために必要なスタイル*/
                    fontSize: { xs: "0.8rem", sm: "1.0rem", md: "1.2rem", lg: "1.4rem" },
                }}
            >
                {
                    `
                        ・このWebサイトは個人の趣味で作成したものであり、商用利用はできません
                        ・このWebサイトの内容は予告なく変更される場合がありますので、ご了承ください
                        ・通常3日以内に返信しますが、連絡がない場合はお手数ですが再度ご連絡ください
                        ・このWebサイトで何か不具合があった場合は以下のGithubのIssuesにてご連絡ください
                        ・連絡先は変更される場合がありますので、最新の情報はこのWebサイトをご確認ください
                        `
                }
            </Typography>
            <Button onClick={() => window.open("https://github.com/sunshine-724/my-homepage/issues", "_blank")} sx={{ textTransform: "none" }}>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                    }}
                >
                    <Typography
                        variant="body2"
                        sx={{
                            fontSize: { xs: "0.8rem", sm: "1.0rem", md: "1.2rem", lg: "1.4rem" }
                        }}
                    >
                        このWebサイトのGithub
                    </Typography>
                    <GitHub />
                </Box>
            </Button>
        </Box>
    )
}

export default caution;