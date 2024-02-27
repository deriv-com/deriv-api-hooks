import { useQuery } from "..";
import { useAuthData } from "../base/use-context-hooks";

export const useAuthorizeQuery = () => {
    const { getActiveAccount, switchAccount } = useAuthData();
    const activeAccount = getActiveAccount();
    const activeToken = activeAccount?.token || "";

    const { data, ...rest } = useQuery({
        name: "authorize",
        queryKey: [activeToken],
        payload: { authorize: activeToken },
        enabled: !!activeToken,
    });

    return {
        data: data?.authorize,
        switchAccount,
        ...rest,
    };
};
