import { GitHub } from "@mui/icons-material"
import { Box, Typography, Button } from "@mui/material"
import ClipBoard from "../component/ClipBoard/ClipBoard"
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';
import InsertLinkIcon from '@mui/icons-material/InsertLink';

interface contactAddressProps {
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

const ContactAddress: React.FC<contactAddressProps> = ({ commonTopBoxStyles,commonTextStyles }) => {
    const commonBoxStyles = {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        height: "100%",
    };

    const commonIconStyles = {
        color: "#ffffff",
        fontSize: { xs: "1.0rem", sm: "1.5rem", md: "2.0rem", lg: "2.5rem" },
    };

    return (
        <>
            <Box sx={{ ...commonTopBoxStyles }}>
                <Typography
                    sx={{...commonTextStyles}}
                >
                    各種連絡先&SNSリンク
                </Typography>
                <Box sx={{ ...commonBoxStyles }}>
                    <EmailIcon sx={commonIconStyles} />
                    <Typography
                        sx={{
                            ...commonTextStyles,
                            padding: "3px",
                        }
                        }
                    >
                        Email:
                    </Typography>
                    <ClipBoard
                        text="k.n.sunshinez16@gmail.com"
                        sx={{
                            textTransform: "none",
                            color: "#ffffff",
                            fontSize: { xs: "0.8rem", sm: "1.2rem", md: "1.5rem", lg: "2.0rem" },
                        }}
                    />
                </Box>
                <Box sx={commonBoxStyles}>
                    <TwitterIcon sx={commonIconStyles} />
                    <Typography sx={commonTextStyles}>Twitter:</Typography>
                    <Button onClick={() => window.open("https://twitter.com/Sunshine4154", "_blank")} sx={{ textTransform: "none" }}>
                        <Typography sx={{ ...commonTextStyles }}>@Sunshine4154</Typography>
                        <InsertLinkIcon sx={commonIconStyles} />
                    </Button>
                </Box>

                <Box sx={commonBoxStyles}>
                    <GitHub sx={commonIconStyles} />
                    <Typography sx={commonTextStyles}>GitHub:</Typography>
                    <Button onClick={() => window.open("https://github.com/sunshine-724", "_blank")} sx={{ textTransform: "none" }}>
                        <Typography sx={{ ...commonTextStyles }}>sunshine-724</Typography>
                        <InsertLinkIcon sx={commonIconStyles} />
                    </Button>
                </Box>
            </Box>
        </>
    )
}

export default ContactAddress