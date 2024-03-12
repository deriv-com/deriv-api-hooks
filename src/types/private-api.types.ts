export type AvailableAccountsRequest = {
    /**
     * Must be `1`
     */
    available_accounts: 1;
    /**
     * List of account categories that needs to received.
     */
    categories: 'wallet'[];
    /**
     * [Optional] The login id of the user. If left unspecified, it defaults to the initial authorized token's login id.
     */
    loginid?: string;
    /**
     * [Optional] Used to pass data through the websocket, which may be retrieved via the `echo_req` output field. Maximum size is 3500 bytes.
     */
    passthrough?: {
        [k: string]: unknown;
    };
    /**
     * [Optional] Used to map request to response.
     */
    req_id?: number;
};

export type AvailableAccountsResponse = {
    available_accounts?: {
        /**
         * Wallet account types that are available to be created
         */
        wallets: {
            /**
             * Account type of wallet
             */
            account_type: 'doughflow' | 'crypto' | 'paymentagent' | 'paymentagent_client' | 'p2p';
            /**
             * Currency of wallet
             */
            currency: string;
            /**
             * Landing Company of wallet.
             */
            landing_company: string;
        }[];
    };
    /**
     * Echo of the request made.
     */
    echo_req: {
        [k: string]: unknown;
    };
    /**
     * Action name of the request made.
     */
    msg_type: 'available_accounts';
    /**
     * Optional field sent in request to map to response, present only when request contains `req_id`.
     */
    req_id?: number;
    [k: string]: unknown;
};

export type CashierPaymentsRequest = {
    /**
     * Must be `1`
     */
    cashier_payments: 1;
    /**
     * [Optional] Cashier provider. `crypto` will be default option for crypto currency accounts.
     */
    provider?: 'crypto';
    /**
     * [Optional] If set to 1, will send updates whenever there is update to crypto payments.
     */
    subscribe?: 0 | 1;
    /**
     * [Optional] Type of transactions to receive.
     */
    transaction_type?: 'all' | 'deposit' | 'withdrawal';
    /**
     * [Optional] Used to pass data through the websocket, which may be retrieved via the `echo_req` output field.
     */
    passthrough?: {
        [k: string]: unknown;
    };
    /**
     * [Optional] Used to map request to response.
     */
    req_id?: number;
};

export type CashierPaymentsResponse = {
    cashier_payments?: {
        /**
         * Response for provider `crypto'.
         */
        crypto: {
            /**
             * The destination crypto address.
             */
            address_hash: string;
            /**
             * The URL of the address on blockchain.
             */
            address_url: string;
            /**
             * [Optional] The transaction amount. Not present when deposit transaction still unconfirmed.
             */
            amount?: number;
            /**
             * [Optional] The number of confirmations for pending deposits or withdrawals.
             */
            confirmations?: number;
            /**
             * The unique identifier for the transaction.
             */
            id: string;
            /**
             * [Optional] Boolean value: 1 or 0, indicating whether the transaction can be cancelled. Only applicable for `withdrawal` transactions.
             */
            is_valid_to_cancel?: 1 | 0;
            /**
             * The status code of the transaction.
             * Possible values for **deposit:** `PENDING|CONFIRMED|ERROR`,
             * possible values for **withdrawal:** `LOCKED|VERIFIED|REJECTED|PERFORMING_BLOCKCHAIN_TXN|PROCESSING|SENT|ERROR|CANCELLED|REVERTING|REVERTED`.
             */
            status_code:
                | 'CANCELLED'
                | 'CONFIRMED'
                | 'ERROR'
                | 'LOCKED'
                | 'PENDING'
                | 'PERFORMING_BLOCKCHAIN_TXN'
                | 'PROCESSING'
                | 'REJECTED'
                | 'REVERTED'
                | 'REVERTING'
                | 'SENT'
                | 'VERIFIED';
            /**
             * The status message of the transaction
             */
            status_message: string;
            /**
             * The epoch of the transaction date
             */
            submit_date: number;
            /**
             * [Optional] The transaction hash when available.
             */
            transaction_hash?: string;
            /**
             * The type of the transaction.
             */
            transaction_type: 'deposit' | 'withdrawal';
            /**
             * [Optional] The URL of the transaction on blockchain if `transaction_hash` is available.
             */
            transaction_url?: string;
        }[];
    };
    subscription?: {
        /**
         * A per-connection unique identifier. Can be passed to the `forget` API call to unsubscribe.
         */
        id: string;
    };
    /**
     * Echo of the request made.
     */
    echo_req: {
        [k: string]: unknown;
    };
    /**
     * Action name of the request made.
     */
    msg_type: 'cashier_payments';
    /**
     * Optional field sent in request to map to response, present only when request contains `req_id`.
     */
    req_id?: number;
    [k: string]: unknown;
};

export type CashierWithdrawalCancelRequest = {
    /**
     * Must be `1`
     */
    cashier_withdrawal_cancel: 1;
    /**
     * The unique identifier for the transaction.
     */
    id: string;
    /**
     * [Optional] Used to pass data through the websocket, which may be retrieved via the `echo_req` output field. Maximum size is 3500 bytes.
     */
    passthrough?: {
        [k: string]: unknown;
    };
    /**
     * [Optional] Used to map request to response.
     */
    req_id?: number;
};

export type CashierWithdrawalResponse = {
    cashier_withdrawal_cancel?: {
        /**
         * The unique identifier for the transaction.
         */
        id: string;
        /**
         * The status code of the cancellation.
         */
        status_code: 'CANCELLED';
    };
    /**
     * Echo of the request made.
     */
    echo_req: {
        [k: string]: unknown;
    };
    /**
     * Action name of the request made.
     */
    msg_type: 'cashier_withdrawal_cancel';
    /**
     * Optional field sent in request to map to response, present only when request contains `req_id`.
     */
    req_id?: number;
    [k: string]: unknown;
};

export type GetAccountTypesRequest = {
    /**
     * Must be `1`
     */
    get_account_types: 1;
    /**
     * [Optional] Set to landing company to get relevant account types. If not set, this defaults to current account landing company
     */
    company?: string;
    /**
     * [Optional] Used to pass data through the websocket, which may be retrieved via the `echo_req` output field. Maximum size is 3500 bytes.
     */
    passthrough?: {
        [k: string]: unknown;
    };
    /**
     * [Optional] Used to map request to response.
     */
    req_id?: number;
};

export type GetAccountTypeResponse = {
    get_account_types?: {
        /**
         * Trading account types that are available to create or link to
         */
        trading: {
            /**
             * Details for trading account types
             *
             * This interface was referenced by `undefined`'s JSON-Schema definition
             * via the `patternProperty` "^(binary|dxtrade|mt5|standard)$".
             */
            [k: string]: {
                /**
                 * Wallet currencies allowed for this trading account
                 */
                allowed_wallet_currencies: string[];
                /**
                 * Can this trading account linked to another currency after opening
                 */
                linkable_to_different_currency: 0 | 1;
                /**
                 * Wallet types that this trading account can be linked to.
                 */
                linkable_wallet_types: string[];
            };
        };
        /**
         * Wallet accounts types that are available to create or link to
         */
        wallet: {
            /**
             * Details for wallets account types
             *
             * This interface was referenced by `undefined`'s JSON-Schema definition
             * via the `patternProperty` "^(affiliate|crypto|doughflow|p2p|paymentagent|paymentagent_client|virtual)$".
             */
            [k: string]: {
                /**
                 * Allowed currencies for creating accounts of this type; used or disallowed currencies are not listed.
                 */
                currencies: string[];
            };
        };
    };
    /**
     * Echo of the request made.
     */
    echo_req: {
        [k: string]: unknown;
    };
    /**
     * Action name of the request made.
     */
    msg_type: 'get_account_types';
    /**
     * Optional field sent in request to map to response, present only when request contains `req_id`.
     */
    req_id?: number;
    [k: string]: unknown;
};

export type NewAccountWalletRequest = {
    /**
     * Must be `1`
     */
    new_account_wallet: 1;
    /**
     * Show whether client has accepted risk disclaimer.
     */
    accept_risk?: 0 | 1;
    /**
     * [Optional] Purpose and reason for requesting the account opening.
     */
    account_opening_reason?: 'Speculative' | 'Income Earning' | 'Hedging';
    /**
     * To set the wallets type - only doughflow and crptyo wallets are allowed for initial phase, other types will be added later
     */
    account_type: 'doughflow' | 'crypto';
    /**
     * [Optional] Within 35 characters.
     */
    address_city?: string;
    /**
     * [Optional] Mailing address.
     */
    address_line_1?: string;
    /**
     * [Optional] Within 70 characters.
     */
    address_line_2?: string;
    /**
     * [Optional] Within 20 characters and may not contain '+'.
     */
    address_postcode?: string;
    /**
     * [Optional] Possible value receive from `states_list` call.
     */
    address_state?: string;
    /**
     * [Optional] Country of legal citizenship, 2-letter country code. Possible value receive from `residence_list` call.
     */
    citizen?: string;
    /**
     * [Optional] Indicates whether this is for a client requesting an account with professional status.
     */
    client_type?: 'professional' | 'retail';
    /**
     * To set currency of the account. List of supported currencies can be acquired with `payout_currencies` call.
     */
    currency: string;
    /**
     * [Optional] Date of birth format: `yyyy-mm-dd`.
     */
    date_of_birth?: string;
    /**
     * Required for maltainvest
     */
    financial_assessment?: {
        /**
         * The anticipated account turnover.
         */
        account_turnover?:
            | 'Less than $25,000'
            | '$25,000 - $50,000'
            | '$50,001 - $100,000'
            | '$100,001 - $500,000'
            | 'Over $500,000';
        /**
         * How much experience do you have in CFD trading?
         */
        cfd_experience?: 'No experience' | 'Less than a year' | '1 - 2 years' | 'Over 3 years';
        /**
         * How many CFD trades have you placed in the past 12 months?
         */
        cfd_frequency?:
            | 'No transactions in the past 12 months'
            | '1 - 5 transactions in the past 12 months'
            | '6 - 10 transactions in the past 12 months'
            | '11 - 39 transactions in the past 12 months'
            | '40 transactions or more in the past 12 months';
        /**
         * In your understanding, CFD trading allows you to:
         */
        cfd_trading_definition?:
            | 'Purchase shares of a company or physical commodities.'
            | 'Place a bet on the price movement.'
            | 'Speculate on the price movement.'
            | 'Make a long-term investment.';
        /**
         * Level of Education.
         */
        education_level?: 'Primary' | 'Secondary' | 'Tertiary';
        /**
         * Industry of Employment.
         */
        employment_industry?:
            | 'Construction'
            | 'Education'
            | 'Finance'
            | 'Health'
            | 'Tourism'
            | 'Information & Communications Technology'
            | 'Science & Engineering'
            | 'Legal'
            | 'Social & Cultural'
            | 'Agriculture'
            | 'Real Estate'
            | 'Food Services'
            | 'Manufacturing'
            | 'Unemployed';
        /**
         * Employment Status.
         */
        employment_status?: 'Employed' | 'Pensioner' | 'Self-Employed' | 'Student' | 'Unemployed';
        /**
         * Estimated Net Worth.
         */
        estimated_worth?:
            | 'Less than $100,000'
            | '$100,000 - $250,000'
            | '$250,001 - $500,000'
            | '$500,001 - $1,000,000'
            | 'Over $1,000,000';
        /**
         * Income Source.
         */
        income_source?:
            | 'Salaried Employee'
            | 'Self-Employed'
            | 'Investments & Dividends'
            | 'Pension'
            | 'State Benefits'
            | 'Savings & Inheritance';
        /**
         * How does leverage affect CFD trading?
         */
        leverage_impact_trading?:
            | 'Leverage is a risk mitigation technique.'
            | 'Leverage prevents you from opening large positions.'
            | 'Leverage guarantees profits.'
            | "Leverage lets you open larger positions for a fraction of the trade's value.";
        /**
         * Leverage trading is high-risk, so it's a good idea to use risk management features such as stop loss. Stop loss allows you to
         */
        leverage_trading_high_risk_stop_loss?:
            | 'Cancel your trade at any time within a chosen timeframe.'
            | 'Close your trade automatically when the loss is more than or equal to a specific amount.'
            | 'Close your trade automatically when the profit is more than or equal to a specific amount.'
            | 'Make a guaranteed profit on your trade.';
        /**
         * Net Annual Income.
         */
        net_income?:
            | 'Less than $25,000'
            | '$25,000 - $50,000'
            | '$50,001 - $100,000'
            | '$100,001 - $500,000'
            | 'Over $500,000';
        /**
         * Occupation.
         */
        occupation?:
            | 'Chief Executives, Senior Officials and Legislators'
            | 'Managers'
            | 'Professionals'
            | 'Clerks'
            | 'Personal Care, Sales and Service Workers'
            | 'Agricultural, Forestry and Fishery Workers'
            | 'Craft, Metal, Electrical and Electronics Workers'
            | 'Plant and Machine Operators and Assemblers'
            | 'Cleaners and Helpers'
            | 'Mining, Construction, Manufacturing and Transport Workers'
            | 'Armed Forces'
            | 'Government Officers'
            | 'Students'
            | 'Unemployed';
        /**
         * When would you be required to pay an initial margin?
         */
        required_initial_margin?:
            | 'When opening a Leveraged CFD trade.'
            | 'When trading Multipliers.'
            | 'When buying shares of a company.'
            | 'All of the above.';
        /**
         * Do you understand that you could potentially lose 100% of the money you use to trade?
         */
        risk_tolerance?: 'Yes' | 'No';
        /**
         * How much knowledge and experience do you have in relation to online trading?
         */
        source_of_experience?:
            | 'I have an academic degree, professional certification, and/or work experience.'
            | 'I trade forex CFDs and other complex financial instruments.'
            | 'I have attended seminars, training, and/or workshops.'
            | 'I have little experience.'
            | 'I have no knowledge.';
        /**
         * [Optional] Source of wealth.
         */
        source_of_wealth?:
            | 'Accumulation of Income/Savings'
            | 'Cash Business'
            | 'Company Ownership'
            | 'Divorce Settlement'
            | 'Inheritance'
            | 'Investment Income'
            | 'Sale of Property';
        /**
         * How much experience do you have with other financial instruments?
         */
        trading_experience_financial_instruments?:
            | 'No experience'
            | 'Less than a year'
            | '1 - 2 years'
            | 'Over 3 years';
        /**
         * How many trades have you placed with other financial instruments in the past 12 months?
         */
        trading_frequency_financial_instruments?:
            | 'No transactions in the past 12 months'
            | '1 - 5 transactions in the past 12 months'
            | '6 - 10 transactions in the past 12 months'
            | '11 - 39 transactions in the past 12 months'
            | '40 transactions or more in the past 12 months';
    };
    /**
     * [Optional] Within 2-50 characters, use only letters, spaces, hyphens, full-stops or apostrophes.
     */
    first_name?: string;
    /**
     * [Optional] Set the landing company of the wallet. Default value is 'svg' if company not provided
     */
    landing_company_short?: 'maltainvest' | 'svg';
    /**
     * [Optional] Within 2-50 characters, use only letters, spaces, hyphens, full-stops or apostrophes.
     */
    last_name?: string;
    /**
     * [Optional] Indicates client's self-declaration of not being a PEP/RCA (Politically Exposed Person/Relatives and Close Associates).
     */
    non_pep_declaration?: number;
    /**
     * [Optional] Starting with `+` followed by 8-35 digits, allowing hyphens or space.
     */
    phone?: string;
    /**
     * Accept any value in enum list.
     */
    salutation?: 'Mr' | 'Ms' | 'Miss' | 'Mrs';
    /**
     * Tax identification number. Only applicable for real money account. Required for `maltainvest` landing company.
     */
    tax_identification_number?: string;
    /**
     * Residence for tax purpose. Comma separated iso country code if multiple jurisdictions. Only applicable for real money account. Required for `maltainvest` landing company.
     */
    tax_residence?: string;
    /**
     * [Optional] Used to pass data through the websocket, which may be retrieved via the `echo_req` output field.
     */
    passthrough?: {
        [k: string]: unknown;
    };
    /**
     * [Optional] Used to map request to response.
     */
    req_id?: number;
};

export type NewAccountWalletResponse = {
    new_account_wallet?: {
        /**
         * Client ID of new real money account
         */
        client_id: string;
        /**
         * Currency of an account
         */
        currency?: string;
        /**
         * Landing company full name
         */
        landing_company: string;
        /**
         * Landing company shortcode
         */
        landing_company_short?: string;
        /**
         * Landing company shortcode
         */
        landing_company_shortcode?: string;
        /**
         * OAuth token for client's login session
         */
        oauth_token: string;
    };
    /**
     * Echo of the request made.
     */
    echo_req: {
        [k: string]: unknown;
    };
    /**
     * Action name of the request made.
     */
    msg_type: 'new_account_wallet';
    /**
     * Optional field sent in request to map to response, present only when request contains `req_id`.
     */
    req_id?: number;
    [k: string]: unknown;
};

export type ServiceTokenRequest = {
    /**
     * Must be `1`
     */
    service_token: 1;
    /**
     * [Optional] The 2-letter country code.
     */
    country?: string;
    /**
     * [Optional] The URL of the web page where the Web SDK will be used.
     */
    referrer?: string;
    /**
     * Server (dxtrade).
     */
    server?: 'demo' | 'real';
    /**
     * The service(s) to retrieve token(s) for.
     */
    service:
        | ('onfido' | 'sendbird' | 'banxa' | 'wyre' | 'dxtrade' | 'ctrader')
        | ('onfido' | 'sendbird' | 'banxa' | 'wyre')[];
    /**
     * [Optional] Used to pass data through the websocket, which may be retrieved via the `echo_req` output field. Maximum size is 3500 bytes.
     */
    passthrough?: {
        [k: string]: unknown;
    };
    /**
     * [Optional] Used to map request to response.
     */
    req_id?: number;
};

export type ServiceTokenResponse = {
    /**
     * Service specific tokens and data.
     */
    service_token?: {
        /**
         * Banxa order data.
         */
        banxa?: {
            /**
             * Created order id reference token.
             */
            token?: string;
            /**
             * Banxa order checkout url.
             */
            url?: string;
            /**
             * Banxa order checkout iframe url.
             */
            url_iframe?: string;
        };
        /**
         * CTrader data.
         */
        ctrader?: {
            /**
             * CTrader One Time token
             */
            token?: string;
        };
        /**
         * Deriv X data.
         */
        dxtrade?: {
            /**
             * Deriv X login token.
             */
            token?: string;
        };
        /**
         * Onfido data.
         */
        onfido?: {
            /**
             * Onfido token.
             */
            token?: string;
        };
        /**
         * Sendbird data.
         */
        sendbird?: {
            /**
             * Sendbird application ID.
             */
            app_id?: string;
            /**
             * The epoch time in which the token will be expired. Note: the token could be expired sooner than this, due to different reasons.
             */
            expiry_time?: number;
            /**
             * Sendbird token.
             */
            token?: string;
        };
        /**
         * Wyre reservation data.
         */
        wyre?: {
            /**
             * Wyre reservation id token
             */
            token?: string;
            /**
             * Wyre reservation URL
             */
            url?: string;
        };
    };
};

export type WalletMigrationRequest = {
    /**
     * Must be `state`, `start` or `reset`
     */
    wallet_migration: 'state' | 'start' | 'reset';
};

export type WalletMigrationResponse = {
    wallet_migration: {
        /**
         * State of wallet migration.
         */
        state: 'ineligible' | 'eligible' | 'in_progress' | 'migrated' | 'failed';
    };
    /**
     * Echo of the request made.
     */
    echo_req: {
        [k: string]: unknown;
    };
    /**
     * Action name of the request made.
     */
    msg_type: 'wallet_migration';
};
