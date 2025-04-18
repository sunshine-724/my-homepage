import { Toolbar, InputBase, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

interface SearchAppBarWithTagProps {
  onSearch: (query: string) => void;
}

const SearchAppBarWithTag: React.FC<SearchAppBarWithTagProps> = ({ onSearch }) => {
  const [expanded, setExpanded] = useState(false);
  
  return (
    <Toolbar
      sx={{
        backgroundColor: "#f0f0f0",
        position: { xs: "static", sm: "absolute" }, // xsのときは"static"（適用しない）
        right: { xs: "auto", sm: 0 }, // xsのときは無効化

        width: { xs: "80%", sm: "30%" }, // xsのときは100%（親要素に合わせる）
        height: { xs: "auto", sm: "100%" }, // xsのときは自動（親要素に合わせる）
      }}
    >

      <InputBase
        placeholder="検索..."
        sx={{
          ml: 2,
          flex: 1,
          backgroundColor: "transparent",
          borderRadius: 2,
          alignItems: "center",
        }}
        onChange={(e) => onSearch(e.target.value)} // 親コンポーネントへ入力値を渡す
      />
      <IconButton>
        <SearchIcon
          sx={{
            backgroundColor: "transparent",
          }}
        />
      </IconButton>
    </Toolbar>
  );
};

export default SearchAppBarWithTag;