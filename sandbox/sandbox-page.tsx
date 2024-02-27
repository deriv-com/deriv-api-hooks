import { URLUtils } from "@deriv-com/utils";
import React from "react";

export const SandboxPage = () => {
    return (
        <div>
            <div>
                <a href={URLUtils.getOauthURL()}>Login</a>
            </div>
        </div>
    );
};
