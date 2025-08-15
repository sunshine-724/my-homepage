import { Box, TextField, Typography } from "@mui/material";

interface OriginTextFieldProps {
    title: string;
    boxWidth: string;
    value: string; // 親からの値
    onChange?: ((value: string) => void) | ((value: string) => void)[]; // 配列も許可
}

export default function OriginTextField({ title, boxWidth, value, onChange }: OriginTextFieldProps) {
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const targetValue = event.target.value;
        if (onChange) {
            if (Array.isArray(onChange)) {
                onChange.forEach(fn => fn(targetValue));
            } else {
                onChange(targetValue);
            }
        }
    };

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            <Typography
                variant="h4"
                sx={{ display: "flex" }}
            >
                {title}
            </Typography>
            <TextField
                sx={{ width: boxWidth }}
                multiline
                value={value} // 親からの値をそのまま表示
                onChange={handleInputChange}
            />
        </Box>
    );
}
