import { useEffect, useState } from "react";
import { Notification } from "../types/notification";

export default function useFetchNoticeList(): Notification[] {
  const [notificationList, setNotificationList] = useState<Notification[]>([]);

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
