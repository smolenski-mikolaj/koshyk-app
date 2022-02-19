import { defineStore } from "pinia";

export const useCategoryStore = defineStore("categories", {
  state: () => ({
    categories: [],
  }),
  actions: {
    async getCategories() {
      const { data } = await useFetch("/api/categories/", {
        credentials: "include",
      });

      if (data.value === "unauthorized") {
        const router = useRouter();
        router.push("/home");

        return;
      }

      if (data.value) {
        this.categories = [...data.value];
      }
    },
  },
});
