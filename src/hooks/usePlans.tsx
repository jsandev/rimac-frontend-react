import { useEffect, useState } from "react";

import { useSelector } from "../store";

import { IPlan, Option } from "../lib/types";

export const usePlans = ({ option }: { option: Option | null }) => {
  const [plans, setPlans] = useState<IPlan[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const { user } = useSelector((state) => state.navigation);

  useEffect(() => {
    if (option === null || user === null || plans.length > 0) return;
    (async () => {
      try {
        setIsLoading(true);
        const url =
          "https://rimac-front-end-challenge.netlify.app/api/plans.json";
        const res = await fetch(url);
        const data = await res.json();
        const list = data.list as IPlan[];
        setPlans(list.filter((p) => p.age >= user.age));
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [option, user, plans]);

  return { plans, isLoading };
};
