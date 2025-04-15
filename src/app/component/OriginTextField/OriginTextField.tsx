import { Box, TextField, Typography } from "@mui/material";
import { useState } from "react";

interface OriginTextFieldProps {
    title: string;
    boxWidth: string;
    onChange?: (value: string) => void; //コールバック
}

export default function OriginTextField({ title, boxWidth, onChange }: OriginTextFieldProps) {
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setInputValue(value);
        if (onChange) {
            onChange(value); // コールバックを呼び出す
        }
    };

    return (
        <>
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
                >{title}
                </Typography>
                <TextField
                    sx={{ width: boxWidth }}
                    value={inputValue}
                    onChange={handleInputChange}
                />
            </Box>
        </>
    );
}