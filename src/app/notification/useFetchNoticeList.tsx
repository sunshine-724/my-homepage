import { useEffect, useState } from "react";
import { Notice } from "../../types/notice";

export default function useFetchNoticeList(): Notice[] {
  const [notificationList, setNotificationList] = useState<Notice[]>([]);

  useEffect(() => {
    const fetchNotificationList = async () => {
      try {
        const response = await fetch("/data/notificationList.json"); // public 配下のファイルは `/data/` で取得できる
        if (!response.ok) throw new Error("Failed to fetch notification list");

        const data = await response.json();
        setNotificationList(data);
      } catch (error) {
        console.error("Error fetching notification list:", error);
      }
    };

    fetchNotificationList();
  }, []);

  return notificationList;
};
