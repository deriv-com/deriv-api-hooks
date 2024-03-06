import React from "react";
import { URLUtils } from "@deriv-com/utils";

export const SandboxPage = () => {
    return (
        <div>
            <div>
                <a href={URLUtils.getOauthURL()}>Login</a>
            </div>
        </div>
    );
};
