import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type School = {
  id: number;
  school_name: string;
};

type SchoolStore = {
  schools: School[];
  addSchool: (data: School) => void;
};
export const useSchoolStore = create<SchoolStore>()(
  persist(
    (set) => ({
      schools: [],
      addSchool: (data) =>
        set((state) => ({ schools: [...state.schools, data] })),
    }),
    {
      name: "school_data",
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
