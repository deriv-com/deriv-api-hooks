import React from "react";
import { URLUtils } from "@deriv-com/utils";
import { useGetSettings } from "../src/api";

export const SandboxPage = () => {
    const { data } = useGetSettings();
    return (
        <div>
            <div>
                <a href={URLUtils.getOauthURL()}>Login</a>
            </div>
            <div>{JSON.stringify(data)}</div>
        </div>
    );
};
