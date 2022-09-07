import type { WhitelistItemData } from "./background/whitelist";

export interface Options {
    bridgeApplicationName: string;
    bridgeBackupEnabled: boolean;
    bridgeBackupHost: string;
    bridgeBackupPort: number;
    bridgeBackupSecure: boolean;
    bridgeBackupPassword: string;
    mediaEnabled: boolean;
    mediaSyncElement: boolean;
    mediaStopOnUnload: boolean;
    localMediaEnabled: boolean;
    localMediaServerPort: number;
    mirroringEnabled: boolean;
    mirroringAppId: string;
    mirroringStreamMaxFrameRate: number;
    mirroringStreamMaxBitRate: number;
    mirroringStreamDownscaleFactor: number;
    mirroringStreamMaxResolution: { width?: number; height?: number };
    mirroringStreamUseMaxResolution: boolean;
    receiverSelectorCloseIfFocusLost: boolean;
    receiverSelectorWaitForConnection: boolean;
    receiverSelectorExpandActive: boolean;
    siteWhitelistEnabled: boolean;
    siteWhitelist: WhitelistItemData[];
    siteWhitelistCustomUserAgent: string;
    showAdvancedOptions: boolean;

    [key: string]: Options[keyof Options];
}

export default {
    bridgeApplicationName: BRIDGE_NAME,
    bridgeBackupEnabled: false,
    bridgeBackupHost: "localhost",
    bridgeBackupPort: 9556,
    bridgeBackupSecure: false,
    bridgeBackupPassword: "",
    mediaEnabled: true,
    mediaSyncElement: false,
    mediaStopOnUnload: false,
    localMediaEnabled: true,
    localMediaServerPort: 9555,
    mirroringEnabled: false,
    mirroringAppId: MIRRORING_APP_ID,
    mirroringStreamMaxFrameRate: 15,
    mirroringStreamMaxBitRate: 1000000,
    mirroringStreamDownscaleFactor: 1.0,
    mirroringStreamMaxResolution: { width: 1920, height: 1080 },
    mirroringStreamUseMaxResolution: true,
    receiverSelectorCloseIfFocusLost: true,
    receiverSelectorWaitForConnection: true,
    receiverSelectorExpandActive: true,
    siteWhitelistEnabled: true,
    siteWhitelist: [{ pattern: "https://www.netflix.com/*", isEnabled: true }],
    siteWhitelistCustomUserAgent: "",
    showAdvancedOptions: false
} as Options;
