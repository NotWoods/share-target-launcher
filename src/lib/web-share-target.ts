export interface ShareTargetFiles {
    name: string;
    accept: string | readonly string[];
};

export interface ShareTargetParams {
    title?: string;
    text?: string;
    url?: string;
    files?: ShareTargetFiles | readonly ShareTargetFiles[];
};

export interface ShareTarget {
    action: string;
    method?: string
    enctype?: string
    params: ShareTargetParams
};

export interface WebAppManifest {
    share_target?: ShareTarget;
};