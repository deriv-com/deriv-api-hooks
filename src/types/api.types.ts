import type {
    AccountLimitsRequest,
    AccountLimitsResponse,
    AccountListRequest,
    AccountListResponse,
    AccountStatusRequest,
    AccountStatusResponse,
    ActiveSymbolsRequest,
    ActiveSymbolsResponse,
    APITokenRequest,
    APITokenResponse,
    ApplicationDeleteRequest,
    ApplicationDeleteResponse,
    ApplicationGetDetailsRequest,
    ApplicationGetDetailsResponse,
    ApplicationListRequest,
    ApplicationListResponse,
    ApplicationMarkupDetailsRequest,
    ApplicationMarkupDetailsResponse,
    ApplicationMarkupStatisticsRequest,
    ApplicationMarkupStatisticsResponse,
    ApplicationRegisterRequest,
    ApplicationRegisterResponse,
    ApplicationUpdateRequest,
    ApplicationUpdateResponse,
    AssetIndexRequest,
    AssetIndexResponse,
    AuthorizeRequest,
    AuthorizeResponse,
    BalanceRequest,
    BalanceResponse,
    BuyContractForMultipleAccountsRequest,
    BuyContractForMultipleAccountsResponse,
    BuyContractRequest,
    BuyContractResponse,
    CancelAContractRequest,
    CancelAContractResponse,
    CashierInformationRequest,
    CashierInformationResponse,
    ContractsForSymbolRequest,
    ContractsForSymbolResponse,
    CopyTradingListRequest,
    CopyTradingListResponse,
    CopyTradingStartRequest,
    CopyTradingStartResponse,
    CopyTradingStatisticsRequest,
    CopyTradingStatisticsResponse,
    CopyTradingStopRequest,
    CopyTradingStopResponse,
    CountriesListRequest,
    CountriesListResponse,
    CryptocurrencyConfigurationsRequest,
    CryptocurrencyConfigurationsResponse,
    DocumentUploadRequest,
    DocumentUploadResponse,
    EconomicCalendarRequest,
    EconomicCalendarResponse,
    ExchangeRatesRequest,
    ExchangeRatesResponse,
    ForgetAllRequest,
    ForgetAllResponse,
    ForgetRequest,
    ForgetResponse,
    GetAccountSettingsRequest,
    GetAccountSettingsResponse,
    GetFinancialAssessmentRequest,
    GetFinancialAssessmentResponse,
    GetSelfExclusionRequest,
    GetSelfExclusionResponse,
    IdentityVerificationAddDocumentRequest,
    IdentityVerificationAddDocumentResponse,
    KYCAuthenticationStatusRequest,
    KYCAuthenticationStatusResponse,
    LandingCompanyDetailsRequest,
    LandingCompanyDetailsResponse,
    LandingCompanyRequest,
    LandingCompanyResponse,
    LoginHistoryRequest,
    LoginHistoryResponse,
    LogOutRequest,
    LogOutResponse,
    MT5AccountsListRequest,
    MT5AccountsListResponse,
    MT5DepositRequest,
    MT5DepositResponse,
    MT5GetSettingRequest,
    MT5GetSettingResponse,
    MT5NewAccountRequest,
    MT5NewAccountResponse,
    MT5PasswordChangeRequest,
    MT5PasswordChangeResponse,
    MT5PasswordCheckRequest,
    MT5PasswordCheckResponse,
    MT5PasswordResetRequest,
    MT5PasswordResetResponse,
    MT5WithdrawalRequest,
    MT5WithdrawalResponse,
    NewRealMoneyAccountDefaultLandingCompanyRequest,
    NewRealMoneyAccountDefaultLandingCompanyResponse,
    NewRealMoneyAccountDerivInvestmentEuropeLtdRequest,
    NewRealMoneyAccountDerivInvestmentEuropeLtdResponse,
    NewVirtualMoneyAccountRequest,
    NewVirtualMoneyAccountResponse,
    OAuthApplicationsRequest,
    OAuthApplicationsResponse,
    P2PAdvertCreateRequest,
    P2PAdvertCreateResponse,
    P2PAdvertInformationRequest,
    P2PAdvertInformationResponse,
    P2PAdvertiserAdvertsRequest,
    P2PAdvertiserAdvertsResponse,
    P2PAdvertiserCreateRequest,
    P2PAdvertiserCreateResponse,
    P2PAdvertiserInformationRequest,
    P2PAdvertiserInformationResponse,
    P2PAdvertiserListRequest,
    P2PAdvertiserListResponse,
    P2PAdvertiserPaymentMethodsRequest,
    P2PAdvertiserPaymentMethodsResponse,
    P2PAdvertiserRelationsRequest,
    P2PAdvertiserRelationsResponse,
    P2PAdvertiserUpdateRequest,
    P2PAdvertiserUpdateResponse,
    P2PAdvertListRequest,
    P2PAdvertListResponse,
    P2PAdvertUpdateRequest,
    P2PAdvertUpdateResponse,
    P2PChatCreateRequest,
    P2PChatCreateResponse,
    P2PCountryListRequest,
    P2PCountryListResponse,
    P2POrderCancelRequest,
    P2POrderCancelResponse,
    P2POrderConfirmRequest,
    P2POrderConfirmResponse,
    P2POrderCreateRequest,
    P2POrderCreateResponse,
    P2POrderDisputeRequest,
    P2POrderDisputeResponse,
    P2POrderInformationRequest,
    P2POrderInformationResponse,
    P2POrderListRequest,
    P2POrderListResponse,
    P2POrderReviewRequest,
    P2POrderReviewResponse,
    P2PPaymentMethodsRequest,
    P2PPaymentMethodsResponse,
    P2PPingRequest,
    P2PPingResponse,
    P2PSettingsRequest,
    P2PSettingsResponse,
    PaymentAgentCreateRequest,
    PaymentAgentCreateResponse,
    PaymentAgentDetailsRequest,
    PaymentAgentDetailsResponse,
    PaymentAgentListRequest,
    PaymentAgentListResponse,
    PaymentAgentTransferRequest,
    PaymentAgentTransferResponse,
    PaymentAgentWithdrawJustificationRequest,
    PaymentAgentWithdrawJustificationResponse,
    PaymentAgentWithdrawRequest,
    PaymentAgentWithdrawResponse,
    PaymentMethodsRequest,
    PaymentMethodsResponse,
    PayoutCurrenciesRequest,
    PayoutCurrenciesResponse,
    PingRequest,
    PingResponse,
    PortfolioRequest,
    PortfolioResponse,
    PriceProposalOpenContractsRequest,
    PriceProposalOpenContractsResponse,
    PriceProposalRequest,
    PriceProposalResponse,
    ProfitTableRequest,
    ProfitTableResponse,
    RealityCheckRequest,
    RealityCheckResponse,
    RevokeOauthApplicationRequest,
    RevokeOauthApplicationResponse,
    SellContractRequest,
    SellContractResponse,
    SellContractsMultipleAccountsRequest,
    SellContractsMultipleAccountsResponse,
    SellExpiredContractsRequest,
    SellExpiredContractsResponse,
    ServerConfigRequest,
    ServerConfigResponse,
    ServerListRequest,
    ServerListResponse,
    ServerStatusRequest,
    ServerStatusResponse,
    ServerTimeRequest,
    ServerTimeResponse,
    SetAccountCurrencyRequest,
    SetAccountCurrencyResponse,
    SetAccountSettingsRequest,
    SetAccountSettingsResponse,
    SetFinancialAssessmentRequest,
    SetFinancialAssessmentResponse,
    SetSelfExclusionRequest,
    SetSelfExclusionResponse,
    StatementRequest,
    StatementResponse,
    StatesListRequest,
    StatesListResponse,
    TermsAndConditionsApprovalRequest,
    TermsAndConditionsApprovalResponse,
    TicksHistoryRequest,
    TicksHistoryResponse,
    TicksStreamRequest,
    TicksStreamResponse,
    TopUpVirtualMoneyAccountRequest,
    TopUpVirtualMoneyAccountResponse,
    TradingDurationsRequest,
    TradingDurationsResponse,
    TradingPlatformInvestorPasswordResetRequest,
    TradingPlatformInvestorPasswordResetResponse,
    TradingPlatformPasswordResetRequest,
    TradingPlatformPasswordResetResponse,
    TradingTimesRequest,
    TradingTimesResponse,
    TransactionsStreamRequest,
    TransactionsStreamResponse,
    TransferBetweenAccountsRequest,
    TransferBetweenAccountsResponse,
    UnsubscribeEmailRequest,
    UnsubscribeEmailResponse,
    UpdateContractHistoryRequest,
    UpdateContractHistoryResponse,
    UpdateContractRequest,
    UpdateContractResponse,
    VerifyEmailCellxpertRequest,
    VerifyEmailCellxpertResponse,
    VerifyEmailRequest,
    VerifyEmailResponse,
} from '@deriv/api-types';
import {
    AccountClosureRequest,
    AccountClosureResponse,
    AccountSecurityRequest,
    AccountSecurityResponse,
    AccountStatisticsRequest,
    AccountStatisticsResponse,
    AffiliateAddCompanyRequest,
    AffiliateAddCompanyResponse,
    AffiliateAddPersonRequest,
    AffiliateAddPersonResponse,
    AffiliateRegisterPersonRequest,
    AffiliateRegisterPersonResponse,
    AvailableAccountsRequest,
    AvailableAccountsResponse,
    CashierPaymentsRequest,
    CashierPaymentsResponse,
    CashierWithdrawalCancelRequest,
    CashierWithdrawalResponse,
    ChangeEmailRequest,
    ChangeEmailResponse,
    ChangePasswordRequest,
    ChangePasswordResponse,
    GetAccountTypeResponse,
    GetAccountTypesRequest,
    CreateJTokenRequest,
    CreateJTokenResponse,
    NewAccountWalletRequest,
    NewAccountWalletResponse,
    LinkWalletRequest,
    LinkWalletResponse,
    PasskeysListRequest,
    PasskeysListResponse,
    PasskeysLoginRequest,
    PasskeysLoginResponse,
    PasskeysOptionsRequest,
    PasskeysOptionsResponse,
    PasskeysRenameRequest,
    PasskeysRenameResponse,
    PasskeysRegisterRequest,
    PasskeysRegisterResponse,
    PasskeysRegisterOptionsRequest,
    PasskeysRegisterOptionsResponse,
    PasskeysRevokeRequest,
    PasskeysRevokeResponse,
    ReportRequest,
    ReportRequestResponse,
    ResetPasswordRequest,
    ResetPasswordResponse,
    ServiceTokenRequest,
    ServiceTokenResponse,
    TradingPlatformLeverageRequest,
    TradingPlatformLeverageResponse,
    TradingPlatformNewAccountRequest,
    TradingPlatformPasswordChangeRequest,
    TradingPlatformPasswordChangeResponse,
    TradingPlatformProductListingRequest,
    TradingPlatformProductListingResponse,
    TradingPlatformWithdrawalRequest,
    TradingPlatformWithdrawalResponse,
    WalletMigrationRequest,
    WalletMigrationResponse,
    TradingPlatformNewAccountResponse,
} from './private-api.types';
import { KeysMatching, NoStringIndex } from './util.types';

export type TPrivateSocketEndpoints = {
    account_closure: {
        request: AccountClosureRequest;
        response: AccountClosureResponse;
    };
    account_list: {
        request: AccountListRequest;
        response: AccountListResponse;
    };
    account_security: {
        request: AccountSecurityRequest;
        response: AccountSecurityResponse;
    };
    account_statistics: {
        request: AccountStatisticsRequest;
        response: AccountStatisticsResponse;
    };
    affiliate_add_company: {
        request: AffiliateAddCompanyRequest;
        response: AffiliateAddCompanyResponse;
    };
    affiliate_add_person: {
        request: AffiliateAddPersonRequest;
        response: AffiliateAddPersonResponse;
    };
    affiliate_register_person: {
        request: AffiliateRegisterPersonRequest;
        response: AffiliateRegisterPersonResponse;
    };
    available_accounts: {
        request: AvailableAccountsRequest;
        response: AvailableAccountsResponse;
    };
    change_email: {
        request: ChangeEmailRequest;
        response: ChangeEmailResponse;
    };
    change_password: {
        request: ChangePasswordRequest;
        response: ChangePasswordResponse;
    };
    wallet_migration: {
        request: WalletMigrationRequest;
        response: WalletMigrationResponse;
    };
    cashier_payments: {
        request: CashierPaymentsRequest;
        response: CashierPaymentsResponse;
    };
    cashier_withdrawal_cancel: {
        request: CashierWithdrawalCancelRequest;
        response: CashierWithdrawalResponse;
    };
    get_account_types: {
        request: GetAccountTypesRequest;
        response: GetAccountTypeResponse;
    };
    jtoken_create: {
        request: CreateJTokenRequest;
        response: CreateJTokenResponse;
    };
    link_wallet: {
        request: LinkWalletRequest;
        response: LinkWalletResponse;
    };
    new_account_wallet: {
        request: NewAccountWalletRequest;
        response: NewAccountWalletResponse;
    };
    passkeys_list: {
        request: PasskeysListRequest;
        response: PasskeysListResponse;
    };
    passkeys_login: {
        request: PasskeysLoginRequest;
        response: PasskeysLoginResponse;
    };
    passkeys_options: {
        request: PasskeysOptionsRequest;
        response: PasskeysOptionsResponse;
    };
    passkeys_rename: {
        request: PasskeysRenameRequest;
        response: PasskeysRenameResponse;
    };
    passkeys_register: {
        request: PasskeysRegisterRequest;
        response: PasskeysRegisterResponse;
    };
    passkeys_register_options: {
        request: PasskeysRegisterOptionsRequest;
        response: PasskeysRegisterOptionsResponse;
    };
    passkeys_revoke: {
        request: PasskeysRevokeRequest;
        response: PasskeysRevokeResponse;
    };
    reset_password: {
        request: ResetPasswordRequest;
        response: ResetPasswordResponse;
    };
    request_report: {
        request: ReportRequest;
        response: ReportRequestResponse;
    };
    service_token: {
        request: ServiceTokenRequest;
        response: ServiceTokenResponse;
        /**
         * Echo of the request made.
         */
        echo_req: {
            [k: string]: unknown;
        };
        /**
         * Action name of the request made.
         */
        msg_type: 'service_token';
        /**
         * Optional field sent in request to map to response, present only when request contains `req_id`.
         */
        req_id?: number;
        [k: string]: unknown;
    };
    trading_platform_investor_password_reset: {
        request: TradingPlatformInvestorPasswordResetRequest;
        response: TradingPlatformInvestorPasswordResetResponse;
        /**
         * Echo of the request made.
         */
        echo_req: {
            [k: string]: unknown;
        };
        /**
         * Action name of the request made.
         */
        msg_type: 'trading_platform_investor_password_reset';
        /**
         * Optional field sent in request to map to response, present only when request contains `req_id`.
         */
        req_id?: number;
        [k: string]: unknown;
    };
    trading_platform_leverage: {
        request: TradingPlatformLeverageRequest;
        response: TradingPlatformLeverageResponse;
        /**
         * Echo of the request made.
         */
        echo_req: {
            [k: string]: unknown;
        };
        /**
         * Action name of the request made.
         */
        msg_type: 'trading_platform_leverage';
        /**
         * Optional field sent in request to map to response, present only when request contains `req_id`.
         */
        req_id?: number;
        [k: string]: unknown;
    };
    trading_platform_password_change: {
        request: TradingPlatformPasswordChangeRequest;
        response: TradingPlatformPasswordChangeResponse;
    };
    trading_platform_new_account: {
        request: TradingPlatformNewAccountRequest;
        response: TradingPlatformNewAccountResponse;
    };
    trading_platform_available_accounts: {
        request: {
            /**
             * Must be `1`
             */
            trading_platform_available_accounts: 1;
            /**
             * Name of trading platform.
             */
            platform: 'mt5' | 'ctrader';
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
        response: {
            /**
             * Available Trading Accounts
             */
            trading_platform_available_accounts?:
                | {
                      /**
                       * A list of Deriv landing companies that can work with this account type
                       */
                      linkable_landing_companies?: ('svg' | 'maltainvest')[];
                      /**
                       * The type of market tradable by this account
                       */
                      market_type?: 'financial' | 'gaming' | 'all';
                      /**
                       * Landing Company legal name
                       */
                      name?: string;
                      /**
                       * Legal requirements for the Landing Company
                       */
                      requirements?: {
                          /**
                           * After first deposit requirements
                           */
                          after_first_deposit?: {
                              /**
                               * Financial assessment requirements
                               */
                              financial_assessment?: string[];
                          };
                          /**
                           * Compliance requirements
                           */
                          compliance?: {
                              /**
                               * Compliance MT5 requirements
                               */
                              mt5?: string[];
                              /**
                               * Compliance tax information requirements
                               */
                              tax_information?: string[];
                          };
                          /**
                           * Sign up requirements
                           */
                          signup?: string[];
                          /**
                           * Withdrawal requirements
                           */
                          withdrawal?: string[];
                      };
                      /**
                       * Landing Company short code
                       */
                      shortcode?: string;
                      /**
                       * Sub account type
                       */
                      sub_account_type?: 'standard' | 'swap_free' | 'stp';
                  }[]
                | null;
            /**
             * Echo of the request made.
             */
            echo_req: {
                [k: string]: unknown;
            };
            /**
             * Action name of the request made.
             */
            msg_type: 'trading_platform_available_accounts';
            /**
             * Optional field sent in request to map to response, present only when request contains `req_id`.
             */
            req_id?: number;
            [k: string]: unknown;
        };
    };
    trading_platform_accounts: {
        request: {
            /**
             * Must be `1`
             */
            trading_platform_accounts: 1;
            /**
             * Trading platform name
             */
            platform: 'dxtrade' | 'mt5' | 'ctrader';
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
        response: {
            /**
             * Array containing Trading account objects.
             */
            trading_platform_accounts?: {
                /**
                 * ID of Trading account.
                 */
                account_id?: string;
                /**
                 * Account type.
                 */
                account_type?: 'demo' | 'real';
                /**
                 * Balance of the Trading account.
                 */
                balance?: null | number;
                /**
                 * Residence of the MT5 account.
                 */
                country?: string;
                /**
                 * Currency of the Trading account.
                 */
                currency?: string;
                /**
                 * Account balance, formatted to appropriate decimal places.
                 */
                display_balance?: null | string;
                /**
                 * Email address of the MT5 account.
                 */
                email?: string;
                /**
                 * Account enabled status
                 */
                enabled?: number;
                /**
                 * Error in MT5 account details.
                 */
                error?: {
                    /**
                     * Error code string.
                     */
                    code?: string;
                    /**
                     * Extra information about the error.
                     */
                    details?: {
                        /**
                         * MT5 account type.
                         */
                        account_type?: string;
                        /**
                         * MT5 account login ID.
                         */
                        login?: string;
                        /**
                         * Trade server name of the MT5 account.
                         */
                        server?: string;
                        /**
                         * Trade server information.
                         */
                        server_info?: {
                            /**
                             * The environment. E.g. Deriv-Server.
                             */
                            environment?: 'Deriv-Demo' | 'Deriv-Server' | 'Deriv-Server-02';
                            /**
                             * Geographical location of the server.
                             */
                            geolocation?: {
                                /**
                                 * Internal server grouping.
                                 */
                                group?: string;
                                /**
                                 * Sever location.
                                 */
                                location?: string;
                                /**
                                 * Sever region.
                                 */
                                region?: string;
                                /**
                                 * Sever sequence.
                                 */
                                sequence?: number;
                            };
                            /**
                             * Server id.
                             */
                            id?: string;
                        };
                    };
                    /**
                     * Error message.
                     */
                    message_to_client?: string;
                };
                /**
                 * Group type of the MT5 account, e.g. `demo\svg_financial`
                 */
                group?: string;
                /**
                 * Landing company shortcode of the Trading account.
                 */
                landing_company_short?: 'bvi' | 'labuan' | 'malta' | 'maltainvest' | 'svg' | 'vanuatu' | 'seychelles';
                /**
                 * Leverage of the MT5 account (1 to 1000).
                 */
                leverage?: number;
                /**
                 * Login name used to log in into Trading platform
                 */
                login?: string;
                /**
                 * Market type
                 */
                market_type?: 'financial' | 'synthetic' | 'all';
                /**
                 * Name of the owner of the MT5 account.
                 */
                name?: string;
                /**
                 * Name of trading platform.
                 */
                platform?: 'dxtrade' | 'mt5' | 'ctrader';
                /**
                 * Trade server name of the MT5 account.
                 */
                server?: string;
                /**
                 * Trade server information.
                 */
                server_info?: {
                    /**
                     * The environment. E.g. Deriv-Server.
                     */
                    environment?: 'Deriv-Demo' | 'Deriv-Server' | 'Deriv-Server-02';
                    /**
                     * Geographical location of the server.
                     */
                    geolocation?: {
                        /**
                         * Internal server grouping.
                         */
                        group?: string;
                        /**
                         * Sever location.
                         */
                        location?: string;
                        /**
                         * Sever region.
                         */
                        region?: string;
                        /**
                         * Sever sequence.
                         */
                        sequence?: number;
                    };
                    /**
                     * Server id.
                     */
                    id?: string;
                };
                /**
                 * Sub account type
                 */
                sub_account_type?: 'financial' | 'financial_stp';
            }[];
            /**
             * Echo of the request made.
             */
            echo_req: {
                [k: string]: unknown;
            };
            /**
             * Action name of the request made.
             */
            msg_type: 'trading_platform_accounts';
            /**
             * Optional field sent in request to map to response, present only when request contains `req_id`.
             */
            req_id?: number;
            [k: string]: unknown;
        };
    };
    trading_platform_investor_password_change: {
        request: TradingPlatformPasswordChangeRequest;
        response: TradingPlatformPasswordChangeResponse;
    };
    trading_platform_withdrawal: {
        request: TradingPlatformWithdrawalRequest;
        response: TradingPlatformWithdrawalResponse;
    };
    notification_event: {
        request: {
            /**
             * Must be `1`
             */
            notification_event: 1;
            /**
             * Event arguments.
             */
            args?: {
                /**
                 * (Optional- for `poi_documents_uploaded` only) An array of onfido document ids intended to be included in the poi check.
                 */
                documents?: string[];
            };
            /**
             * The category or nature of the event.
             */
            category: 'authentication';
            /**
             * The name of the event.
             */
            event: 'poi_documents_uploaded';
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
            [k: string]: unknown;
        };
        response: {
            /**
             * `1`: all actions finished successfully, `0`: at least one or more actions failed.
             */
            notification_event: 0 | 1;
            /**
             * Echo of the request made.
             */
            echo_req: {
                [k: string]: unknown;
            };
            /**
             * Action name of the request made.
             */
            msg_type: 'notification_event';
            /**
             * [Optional] Used to map request to response.
             */
            req_id?: number;
        };
    };
    trading_platform_deposit: {
        request: {
            /**
             * Must be `1`
             */
            trading_platform_deposit: 1;
            /**
             * Amount to deposit (in the currency of from_wallet).
             */
            amount?: number;
            /**
             * Wallet account to transfer money from.
             */
            from_account?: string;
            /**
             * Name of trading platform.
             */
            platform: 'dxtrade' | 'derivez' | 'ctrader';
            /**
             * Trading account login to deposit money to.
             */
            to_account: string;
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
        response: {
            trading_platform_deposit?:
                | {
                      /**
                       * The reference number for the related deposit to the trading account
                       */
                      transaction_id?: number;
                      [k: string]: unknown;
                  }
                | 1;
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
        msg_type: 'trading_platform_deposit';
        /**
         * Optional field sent in request to map to response, present only when request contains `req_id`.
         */
        req_id?: number;
        [k: string]: unknown;
    };
    mt5_deposit: {
        request: {
            /**
             * Must be `1`
             */
            mt5_deposit: 1;
            /**
             * Amount to deposit (in the currency of from_binary); min = $1 or an equivalent amount, max = $20000 or an equivalent amount
             */
            amount?: number;
            /**
             * Binary account loginid to transfer money from
             */
            from_binary?: string;
            /**
             * MT5 account login to deposit money to
             */
            to_mt5: string;
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
        response: {
            mt5_deposit?: number;
            /**
             * Withdrawal reference ID of Binary account
             */
            binary_transaction_id?: number;
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
        msg_type: 'mt5_deposit';
        /**
         * Optional field sent in request to map to response, present only when request contains `req_id`.
         */
        req_id?: number;
        [k: string]: unknown;
    };
};

type TSocketEndpoints = {
    active_symbols: {
        request: ActiveSymbolsRequest;
        response: ActiveSymbolsResponse;
    };
    api_token: {
        request: APITokenRequest;
        response: APITokenResponse;
    };
    app_delete: {
        request: ApplicationDeleteRequest;
        response: ApplicationDeleteResponse;
    };
    app_get: {
        request: ApplicationGetDetailsRequest;
        response: ApplicationGetDetailsResponse;
    };
    app_list: {
        request: ApplicationListRequest;
        response: ApplicationListResponse;
    };
    app_markup_details: {
        request: ApplicationMarkupDetailsRequest;
        response: ApplicationMarkupDetailsResponse;
    };
    app_markup_statistics: {
        request: ApplicationMarkupStatisticsRequest;
        response: ApplicationMarkupStatisticsResponse;
    };
    app_register: {
        request: ApplicationRegisterRequest;
        response: ApplicationRegisterResponse;
    };
    app_update: {
        request: ApplicationUpdateRequest;
        response: ApplicationUpdateResponse;
    };
    asset_index: {
        request: AssetIndexRequest;
        response: AssetIndexResponse;
    };
    authorize: {
        request: AuthorizeRequest;
        response: AuthorizeResponse;
    };
    balance: {
        request: BalanceRequest;
        response: BalanceResponse;
    };
    buy_contract_for_multiple_accounts: {
        request: BuyContractForMultipleAccountsRequest;
        response: BuyContractForMultipleAccountsResponse;
    };
    buy: {
        request: BuyContractRequest;
        response: BuyContractResponse;
    };
    cancel: {
        request: CancelAContractRequest;
        response: CancelAContractResponse;
    };
    cashier: {
        request: CashierInformationRequest;
        response: CashierInformationResponse;
    };
    confirm_email: {
        request: {
            /**
             * Must be `1`.
             */
            confirm_email: 1;

            /**
             * Boolean value: 1 or 0, indicating whether the client has given consent for marketing emails.
             */
            email_consent: 1 | 0;

            /**
             * Email verification code (received from a `verify_email` call, which must be done first).
             */
            verification_code: string;

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
        response: {
            /**
             * 1 for success (The verification code has been successfully verified)
             */
            confirm_email: 0 | 1;
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
        msg_type: 'confirm_email';

        /**
         * Optional field sent in request to map to response, present only when request contains `req_id`.
         */
        req_id?: number;
    };
    contract_update_history: {
        request: UpdateContractHistoryRequest;
        response: UpdateContractHistoryResponse;
    };
    contract_update: {
        request: UpdateContractRequest;
        response: UpdateContractResponse;
    };
    contracts_for: {
        request: ContractsForSymbolRequest;
        response: ContractsForSymbolResponse;
    };
    copy_start: {
        request: CopyTradingStartRequest;
        response: CopyTradingStartResponse;
    };
    copy_stop: {
        request: CopyTradingStopRequest;
        response: CopyTradingStopResponse;
    };
    copytrading_list: {
        request: CopyTradingListRequest;
        response: CopyTradingListResponse;
    };
    copytrading_statistics: {
        request: CopyTradingStatisticsRequest;
        response: CopyTradingStatisticsResponse;
    };
    crypto_config: {
        request: CryptocurrencyConfigurationsRequest;
        response: CryptocurrencyConfigurationsResponse;
    };
    document_upload: {
        request: DocumentUploadRequest;
        response: DocumentUploadResponse;
    };
    economic_calendar: {
        request: EconomicCalendarRequest;
        response: EconomicCalendarResponse;
    };
    exchange_rates: {
        request: ExchangeRatesRequest;
        response: ExchangeRatesResponse;
    };
    forget_all: {
        request: ForgetAllRequest;
        response: ForgetAllResponse;
    };
    forget: {
        request: ForgetRequest;
        response: ForgetResponse;
    };
    get_account_status: {
        request: AccountStatusRequest;
        response: AccountStatusResponse;
    };
    get_financial_assessment: {
        request: GetFinancialAssessmentRequest;
        response: GetFinancialAssessmentResponse;
    };
    get_limits: {
        request: AccountLimitsRequest;
        response: AccountLimitsResponse;
    };
    get_self_exclusion: {
        request: GetSelfExclusionRequest;
        response: GetSelfExclusionResponse;
    };
    get_settings: {
        request: GetAccountSettingsRequest;
        response: GetAccountSettingsResponse;
    };
    identity_verification_document_add: {
        request: IdentityVerificationAddDocumentRequest;
        response: IdentityVerificationAddDocumentResponse;
    };
    kyc_auth_status: {
        request: KYCAuthenticationStatusRequest;
        response: KYCAuthenticationStatusResponse;
    };
    landing_company_details: {
        request: LandingCompanyDetailsRequest;
        response: LandingCompanyDetailsResponse;
    };
    landing_company: {
        request: Omit<LandingCompanyRequest, 'landing_company'> & {
            landing_company: string;
        };
        response: LandingCompanyResponse;
    };
    login_history: {
        request: LoginHistoryRequest;
        response: LoginHistoryResponse;
    };
    logout: {
        request: LogOutRequest;
        response: LogOutResponse;
    };
    mt5_deposit: {
        request: MT5DepositRequest;
        response: MT5DepositResponse;
    };
    mt5_get_settings: {
        request: MT5GetSettingRequest;
        response: MT5GetSettingResponse;
    };
    mt5_login_list: {
        request: MT5AccountsListRequest;
        response: MT5AccountsListResponse;
    };
    mt5_new_account: {
        request: MT5NewAccountRequest;
        response: MT5NewAccountResponse;
    };
    mt5_password_change: {
        request: MT5PasswordChangeRequest;
        response: MT5PasswordChangeResponse;
    };
    mt5_password_check: {
        request: MT5PasswordCheckRequest;
        response: MT5PasswordCheckResponse;
    };
    mt5_password_reset: {
        request: MT5PasswordResetRequest;
        response: MT5PasswordResetResponse;
    };
    mt5_withdrawal: {
        request: MT5WithdrawalRequest;
        response: MT5WithdrawalResponse;
    };
    new_account_maltainvest: {
        request: NewRealMoneyAccountDerivInvestmentEuropeLtdRequest;
        response: NewRealMoneyAccountDerivInvestmentEuropeLtdResponse;
    };
    new_account_real: {
        request: NewRealMoneyAccountDefaultLandingCompanyRequest;
        response: NewRealMoneyAccountDefaultLandingCompanyResponse;
    };
    new_account_virtual: {
        request: NewVirtualMoneyAccountRequest;
        response: NewVirtualMoneyAccountResponse;
    };
    oauth_apps: {
        request: OAuthApplicationsRequest;
        response: OAuthApplicationsResponse;
    };
    p2p_advert_create: {
        request: P2PAdvertCreateRequest;
        response: P2PAdvertCreateResponse;
    };
    p2p_advert_info: {
        request: P2PAdvertInformationRequest;
        response: P2PAdvertInformationResponse;
    };
    p2p_advert_list: {
        request: P2PAdvertListRequest;
        response: P2PAdvertListResponse;
    };
    p2p_advert_update: {
        request: P2PAdvertUpdateRequest;
        response: P2PAdvertUpdateResponse;
    };
    p2p_advertiser_adverts: {
        request: P2PAdvertiserAdvertsRequest;
        response: P2PAdvertiserAdvertsResponse;
    };
    p2p_advertiser_create: {
        request: P2PAdvertiserCreateRequest;
        response: P2PAdvertiserCreateResponse;
    };
    p2p_advertiser_info: {
        request: P2PAdvertiserInformationRequest;
        response: P2PAdvertiserInformationResponse;
    };
    p2p_advertiser_list: {
        request: P2PAdvertiserListRequest;
        response: P2PAdvertiserListResponse;
    };
    p2p_advertiser_payment_methods: {
        request: P2PAdvertiserPaymentMethodsRequest;
        response: P2PAdvertiserPaymentMethodsResponse;
    };
    p2p_advertiser_relations: {
        request: P2PAdvertiserRelationsRequest;
        response: P2PAdvertiserRelationsResponse;
    };
    p2p_advertiser_update: {
        request: P2PAdvertiserUpdateRequest;
        response: P2PAdvertiserUpdateResponse;
    };
    p2p_chat_create: {
        request: P2PChatCreateRequest;
        response: P2PChatCreateResponse;
    };
    p2p_country_list: {
        request: P2PCountryListRequest;
        response: P2PCountryListResponse;
    };
    p2p_order_cancel: {
        request: P2POrderCancelRequest;
        response: P2POrderCancelResponse;
    };
    p2p_order_confirm: {
        request: P2POrderConfirmRequest;
        response: P2POrderConfirmResponse;
    };
    p2p_order_create: {
        request: P2POrderCreateRequest;
        response: P2POrderCreateResponse;
    };
    p2p_order_dispute: {
        request: P2POrderDisputeRequest;
        response: P2POrderDisputeResponse;
    };
    p2p_order_info: {
        request: P2POrderInformationRequest;
        response: P2POrderInformationResponse;
    };
    p2p_order_list: {
        request: P2POrderListRequest;
        response: P2POrderListResponse;
    };
    p2p_order_review: {
        request: P2POrderReviewRequest;
        response: P2POrderReviewResponse;
    };
    p2p_payment_methods: {
        request: P2PPaymentMethodsRequest;
        response: P2PPaymentMethodsResponse;
    };
    p2p_ping: {
        request: P2PPingRequest;
        response: P2PPingResponse;
    };
    p2p_settings: {
        request: P2PSettingsRequest;
        response: P2PSettingsResponse;
    };
    payment_methods: {
        request: PaymentMethodsRequest;
        response: PaymentMethodsResponse;
    };
    paymentagent_create: {
        request: PaymentAgentCreateRequest;
        response: PaymentAgentCreateResponse;
    };
    paymentagent_details: {
        request: PaymentAgentDetailsRequest;
        response: PaymentAgentDetailsResponse;
    };
    paymentagent_list: {
        request: PaymentAgentListRequest;
        response: PaymentAgentListResponse;
    };
    paymentagent_transfer: {
        request: PaymentAgentTransferRequest;
        response: PaymentAgentTransferResponse;
    };
    paymentagent_withdraw: {
        request: PaymentAgentWithdrawRequest;
        response: PaymentAgentWithdrawResponse;
    };
    paymentagent_withdraw_justification: {
        request: PaymentAgentWithdrawJustificationRequest;
        response: PaymentAgentWithdrawJustificationResponse;
    };
    payout_currencies: {
        request: PayoutCurrenciesRequest;
        response: PayoutCurrenciesResponse;
    };
    ping: {
        request: PingRequest;
        response: PingResponse;
    };
    portfolio: {
        request: PortfolioRequest;
        response: PortfolioResponse;
    };
    profit_table: {
        request: ProfitTableRequest;
        response: ProfitTableResponse;
    };
    proposal_open_contract: {
        request: PriceProposalOpenContractsRequest;
        response: PriceProposalOpenContractsResponse;
    };
    proposal: {
        request: PriceProposalRequest;
        response: PriceProposalResponse;
    };
    reality_check: {
        request: RealityCheckRequest;
        response: RealityCheckResponse;
    };
    residence_list: {
        request: CountriesListRequest;
        response: CountriesListResponse;
    };
    revoke_oauth_app: {
        request: RevokeOauthApplicationRequest;
        response: RevokeOauthApplicationResponse;
    };
    sell_contract_for_multiple_accounts: {
        request: SellContractsMultipleAccountsRequest;
        response: SellContractsMultipleAccountsResponse;
    };
    sell_expired: {
        request: SellExpiredContractsRequest;
        response: SellExpiredContractsResponse;
    };
    sell: {
        request: SellContractRequest;
        response: SellContractResponse;
    };
    set_account_currency: {
        request: SetAccountCurrencyRequest;
        response: SetAccountCurrencyResponse;
    };
    set_financial_assessment: {
        request: SetFinancialAssessmentRequest;
        response: SetFinancialAssessmentResponse;
    };
    set_self_exclusion: {
        request: SetSelfExclusionRequest;
        response: SetSelfExclusionResponse;
    };
    set_settings: {
        request: SetAccountSettingsRequest;
        response: SetAccountSettingsResponse;
    };
    statement: {
        request: StatementRequest;
        response: StatementResponse;
    };
    states_list: {
        request: StatesListRequest;
        response: StatesListResponse;
    };
    ticks_history: {
        request: TicksHistoryRequest;
        response: TicksHistoryResponse;
    };
    ticks: {
        request: TicksStreamRequest;
        response: TicksStreamResponse;
    };
    time: {
        request: ServerTimeRequest;
        response: ServerTimeResponse;
    };
    tnc_approval: {
        request: TermsAndConditionsApprovalRequest;
        response: TermsAndConditionsApprovalResponse;
    };
    topup_virtual: {
        request: TopUpVirtualMoneyAccountRequest;
        response: TopUpVirtualMoneyAccountResponse;
    };
    trading_durations: {
        request: TradingDurationsRequest;
        response: TradingDurationsResponse;
    };
    trading_platform_product_listing: {
        request: TradingPlatformProductListingRequest;
        response: TradingPlatformProductListingResponse;
    };
    trading_platform_password_reset: {
        request: TradingPlatformPasswordResetRequest;
        response: TradingPlatformPasswordResetResponse;
    };
    trading_servers: {
        request: ServerListRequest;
        response: ServerListResponse;
    };
    trading_times: {
        request: TradingTimesRequest;
        response: TradingTimesResponse;
    };
    transaction: {
        request: TransactionsStreamRequest;
        response: TransactionsStreamResponse;
    };
    transfer_between_accounts: {
        request: TransferBetweenAccountsRequest;
        response: TransferBetweenAccountsResponse;
    };
    unsubscribe_email: {
        request: UnsubscribeEmailRequest;
        response: UnsubscribeEmailResponse;
    };
    verify_email_cellxpert: {
        request: VerifyEmailCellxpertRequest;
        response: VerifyEmailCellxpertResponse;
    };
    verify_email: {
        request: VerifyEmailRequest;
        response: VerifyEmailResponse;
    };
    website_config: {
        request: ServerConfigRequest;
        response: ServerConfigResponse;
    };
    website_status: {
        request: ServerStatusRequest;
        response: ServerStatusResponse;
    };
} & TPrivateSocketEndpoints;

export type TSocketEndpointNames = keyof TSocketEndpoints;

export type TSocketSubscribableEndpointNames = Extract<
    TSocketEndpointNames,
    | 'balance'
    | 'buy'
    | 'cashier_payments'
    | 'crypto_estimations'
    | 'exchange_rates'
    | 'p2p_advert_info'
    | 'p2p_advertiser_create'
    | 'p2p_advertiser_info'
    | 'p2p_order_create'
    | 'p2p_order_info'
    | 'p2p_order_list'
    | 'p2p_settings'
    | 'proposal'
    | 'proposal_open_contract'
    | 'ticks'
    | 'ticks_history'
    | 'trading_platform_asset_listing'
    | 'transaction'
    | 'website_status'
>;

export type TSocketResponse<T extends TSocketEndpointNames> = TSocketEndpoints[T]['response'] & TSocketError<T>;

export type TSocketError<T extends TSocketEndpointNames> = {
    /**
     * Echo of the request made.
     */
    echo_req: {
        [k: string]: unknown;
    };
    /**
     * Error object.
     */
    error: {
        code: string;
        message: string;
    };
    /**
     * Action name of the request made.
     */
    msg_type: T;
    /**
     * [Optional] Used to map request to response.
     */
    req_id?: number;
};

export type TSocketResponseData<T extends TSocketEndpointNames> = Omit<
    NoStringIndex<TSocketResponse<T>>,
    'req_id' | 'msg_type' | 'echo_req' | 'subscription'
>;

export type TSocketSubscribeResponseData<T extends TSocketSubscribableEndpointNames> = Omit<
    NoStringIndex<TSocketResponse<T>>,
    'req_id' | 'msg_type' | 'echo_req' | 'subscription'
>;

type TSocketRequest<T extends TSocketEndpointNames> = TSocketEndpoints[T]['request'];

type TRemovableEndpointName<T extends TSocketEndpointNames> = T extends KeysMatching<TSocketRequest<T>, 1> ? T : never;

type TSocketRequestCleaned<T extends TSocketEndpointNames> = Omit<
    TSocketRequest<T>,
    TRemovableEndpointName<T> | 'passthrough' | 'req_id' | 'subscribe'
>;

export type TSocketPaginatateableRequestCleaned<T extends TSocketPaginateableEndpointNames> = Omit<
    TSocketRequest<T>,
    TRemovableEndpointName<T> | 'passthrough' | 'req_id' | 'subscribe'
> & {
    /** Number of records to skip */
    offset?: number;
    /** Number of records to return */
    limit?: number;
};

export type TSocketRequestPayload<
    T extends TSocketEndpointNames | TSocketPaginateableEndpointNames = TSocketEndpointNames,
> =
    Partial<TSocketRequestCleaned<T>> extends TSocketRequestCleaned<T>
        ? T extends TSocketPaginateableEndpointNames
            ? TSocketPaginatateableRequestCleaned<T>
            : TSocketRequestCleaned<T>
        : T extends TSocketPaginateableEndpointNames
          ? TSocketPaginatateableRequestCleaned<T>
          : TSocketRequestCleaned<T>;

export type TSocketPaginateableEndpointNames = KeysMatching<
    TSocketEndpoints,
    { request: { limit?: number; offset?: number } }
>;
