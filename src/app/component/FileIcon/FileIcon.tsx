import React from 'react';
import { PictureAsPdf, Image as ImageIcon, AttachFile, DocumentScanner } from '@mui/icons-material';
import { Box} from '@mui/material';

// ファイルの拡張子に基づいてアイコンを返すコンポーネント
const FileIcon = ({ fileName }: { fileName: string }) => {
    // ファイルの拡張子を取得
    const fileExtension = fileName.split('.').pop()?.toLowerCase();

    // 拡張子ごとにアイコンを選択
    switch (fileExtension) {
        case 'pdf':
            return <PictureAsPdf sx={{ fontSize: 40, color: 'red' }} />;  // PDFの場合はPictureAsPdfを使う
        case 'png':
        case 'jpg':
        case 'jpeg':
            return <ImageIcon sx={{ fontSize: 40, color: 'blue' }} />;
        case 'txt':
        case 'doc':
        case 'docx':
            return <DocumentScanner sx={{ fontSize: 40, color: 'green' }} />;
        default:
            return <AttachFile sx={{ fontSize: 40, color: 'grey' }} />;
    }
};

// 外部から渡されたfileNameで表示するコンポーネント
interface FileDisplayProps {
    fileName: string;
}

const FileDisplay: React.FC<FileDisplayProps> = ({ fileName }) => {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center'}}>
            <FileIcon fileName={fileName} />
        </Box>
    );
};

export default FileDisplay;
