import { useAccountClosure } from './use-account-closure';
import { useAccountSecurity } from './use-account-security';
import { useAffiliateAddCompany } from './use-affiliate-add-company';
import { useAffiliateAddPerson } from './use-affiliate-add-person';
import { useAffiliateRegisterPerson } from './use-affiliate-register-person';
import { useApiToken } from './use-api-token';
import { useAppDelete } from './use-app-delete';
import { useAppRegister } from './use-app-register';
import { useAppUpdate } from './use-app-update';
import { useAuthorize } from './use-authorize';
import { useBuyContractForMultipleAccounts } from './use-buy-contract-for-multiple-accounts';
import { useCancel } from './use-cancel';
import { useCashierWithdrawalCancel } from './use-cashier-withdrawal-cancel';
import { useChangeEmail } from './use-change-email';
import { useChangePassword } from './use-change-password';
import { useConfirmEmail } from './use-confirm-email';
import { useContractUpdate } from './use-contract-update';
import { useCopyStart } from './use-copy-start';
import { useCopyStop } from './use-copy-stop';
import { useDocumentUpload } from './use-document-upload';
import { useForget } from './use-forget';
import { useForgetAll } from './use-forget-all';
import { useIdentityVerificationDocumentAdd } from './use-identity-verification-document-add';
import { useJtokenCreate } from './use-jtoken-create';
import { useLinkWallet } from './use-link-wallet';
import { useLogout } from './use-logout';
import { useMt5Deposit } from './use-mt5-deposit';
import { useMT5NewAccount } from './use-mt5-new-account';
import { useMt5PasswordChange } from './use-mt5-password-change';
import { useMt5PasswordReset } from './use-mt5-password-reset';
import { useMt5Withdrawal } from './use-mt5-withdrawal';
import { useNewAccountMaltainvest } from './use-new-account-maltainvest';
import { useNewAccountReal } from './use-new-account-real';
import { useNewAccountVirtual } from './use-new-account-virtual';
import { useNewAccountWallet } from './use-new-account-wallet';
import { useNotificationEvent } from './use-notification-event';
import { useP2pAdvertCreate } from './use-p2p-advert-create';
import { useP2pAdvertUpdate } from './use-p2p-advert-update';
import { useP2pAdvertiserUpdate } from './use-p2p-advertiser-update';
import { useP2pChatCreate } from './use-p2p-chat-create';
import { useP2pOrderCancel } from './use-p2p-order-cancel';
import { useP2pOrderConfirm } from './use-p2p-order-confirm';
import { useP2pOrderDispute } from './use-p2p-order-dispute';
import { useP2POrderCreate } from './use-p2p-order-create';
import { useP2PAdvertiserCreate } from './use-p2p-advertiser-create';
import { useP2PAdvertiserPaymentMethods } from './use-p2p-advertiser-payment-methods';
import { useP2PAdvertiserRelations } from './use-p2p-advertiser-relations';
import { useP2POrderReview } from './use-p2p-order-review';
import { usePasskeysLogin } from './use-passkeys-login';
import { usePasskeysRegister } from './use-passkeys-register';
import { usePasskeysRename } from './use-passkeys-rename';
import { usePasskeysRevoke } from './use-passkeys-revoke';
import { usePaymentagentCreate } from './use-paymentagent-create';
import { usePaymentagentTransfer } from './use-paymentagent-transfer';
import { usePaymentagentWithdraw } from './use-paymentagent-withdraw';
import { useResetPassword } from './use-reset-password';
import { useRevokeOauthApp } from './use-revoke-oauth-app';
import { useSell } from './use-sell';
import { useSellContractForMultipleAccounts } from './use-sell-contract-for-multiple-accounts';
import { useSellExpired } from './use-sell-expired';
import { useSetAccountCurrency } from './use-set-account-currency';
import { useSetFinancialAssessment } from './use-set-financial-assessment';
import { useSetSelfExclusion } from './use-set-self-exclusion';
import { useSetSettings } from './use-set-settings';
import { useTncApproval } from './use-tnc-approval';
import { useTopupVirtual } from './use-topup-virtual';
import { useTradingPlatformDeposit } from './use-trading-platform-deposit';
import { useTradingPlatformInvestorPasswordChange } from './use-trading-platform-investor-password-change';
import { useTradingPlatformInvestorPasswordReset } from './use-trading-platform-investor-password-reset';
import { useTradingPlatformNewAccount } from './use-trading-platform-new-account';
import { useTradingPlatformPasswordChange } from './use-trading-platform-password-change';
import { useTradingPlatformPasswordReset } from './use-trading-platform-password-reset';
import { useTradingPlatformWithdrawal } from './use-trading-platform-withdrawal';
import { useTransferBetweenAccounts } from './use-transfer-between-accounts';
import { useUnsubscribeEmail } from './use-unsubscribe-email';
import { useVerifyEmail } from './use-verify-email';
import { useWalletMigration } from './use-wallet-migration';

export {
    useAccountClosure,
    useAccountSecurity,
    useAffiliateAddCompany,
    useAffiliateAddPerson,
    useAffiliateRegisterPerson,
    useApiToken,
    useAppDelete,
    useAppRegister,
    useAppUpdate,
    useAuthorize,
    useBuyContractForMultipleAccounts,
    useCancel,
    useCashierWithdrawalCancel,
    useChangeEmail,
    useChangePassword,
    useConfirmEmail,
    useContractUpdate,
    useCopyStart,
    useCopyStop,
    useDocumentUpload,
    useForget,
    useForgetAll,
    useIdentityVerificationDocumentAdd,
    useJtokenCreate,
    useLinkWallet,
    useLogout,
    useMt5Deposit,
    useMT5NewAccount,
    useMt5PasswordChange,
    useMt5PasswordReset,
    useMt5Withdrawal,
    useNewAccountMaltainvest,
    useNewAccountReal,
    useNewAccountVirtual,
    useNewAccountWallet,
    useNotificationEvent,
    useP2pAdvertCreate,
    useP2pAdvertUpdate,
    useP2pAdvertiserUpdate,
    useP2pChatCreate,
    useP2pOrderCancel,
    useP2pOrderConfirm,
    useP2pOrderDispute,
    useP2POrderCreate,
    useP2PAdvertiserCreate,
    useP2PAdvertiserPaymentMethods,
    useP2PAdvertiserRelations,
    useP2POrderReview,
    usePasskeysLogin,
    usePasskeysRegister,
    usePasskeysRename,
    usePasskeysRevoke,
    usePaymentagentCreate,
    usePaymentagentTransfer,
    usePaymentagentWithdraw,
    useResetPassword,
    useRevokeOauthApp,
    useSell,
    useSellContractForMultipleAccounts,
    useSellExpired,
    useSetAccountCurrency,
    useSetFinancialAssessment,
    useSetSelfExclusion,
    useSetSettings,
    useTncApproval,
    useTopupVirtual,
    useTradingPlatformDeposit,
    useTradingPlatformInvestorPasswordChange,
    useTradingPlatformInvestorPasswordReset,
    useTradingPlatformNewAccount,
    useTradingPlatformPasswordChange,
    useTradingPlatformPasswordReset,
    useTradingPlatformWithdrawal,
    useTransferBetweenAccounts,
    useUnsubscribeEmail,
    useVerifyEmail,
    useWalletMigration,
};
