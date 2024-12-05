import { getDocs, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useAppSelector } from "../app/hooks";
import { usersRef } from "../utils/firebaseConfig";
import { UserType } from "../utils/types";

function useFetchUsers() {
  const [users, setUsers] = useState<Array<UserType>>([]);
  const uid = useAppSelector((zoomApp) => zoomApp.auth.userInfo?.uid);

  useEffect(() => {
    const getUser = async () => {
      try {
        console.log("Fetching users");
        const data = await getDocs(usersRef); // Remove the where clause
        const firebaseUsers: Array<UserType> = [];

        data.forEach((user) => {
          const userData: UserType = user.data() as UserType;
          firebaseUsers.push({
            ...userData,
            label: userData.name,
          });
        });
        console.log("Fetched users:", firebaseUsers);
        setUsers(firebaseUsers);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    getUser();
  }, [uid]);

  return [users];
}

export default useFetchUsers;
