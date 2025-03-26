import { useEffect, useState } from "react";

interface BlogList {
    id: string;
    title: string;
    date: string;
    chips: string[];
}

export default function useFetchBlogList(): BlogList[] {
  const [blogList, setBlogList] = useState<BlogList[]>([]);

  useEffect(() => {
    const fetchBlogList = async () => {
      try {
        const response = await fetch("/data/blogList.json"); // public 配下のファイルは `/data/` で取得できる
        if (!response.ok) throw new Error("Failed to fetch blog list");

        const data = await response.json();
        setBlogList(data);
      } catch (error) {
        console.error("Error fetching blog list:", error);
      }
    };

    fetchBlogList();
  }, []);

  return blogList;
};
