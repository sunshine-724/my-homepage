import { AppBar, Toolbar, InputBase, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

interface SearchAppBarProps {
  onSearch: (query: string) => void;
}

const SearchAppBar: React.FC<SearchAppBarProps> = ({ onSearch }) => {
  return (
    <AppBar position="static" sx={{width: "30%",height:"auto",backgroundColor: "transparent",right: "0",position: "absolute"}}>
      <Toolbar>
        <InputBase
          placeholder="検索..."
          sx={{
            ml: 2,
            flex: 1,
            backgroundColor: "white",
            borderRadius: 2,
            alignItems: "center",
          }}
          onChange={(e) => onSearch(e.target.value)} // 親コンポーネントへ入力値を渡す
        />
        <IconButton>
          <SearchIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default SearchAppBar;