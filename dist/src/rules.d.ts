export declare type Rules = Record<string, string | [level: string, ...options: any]>;
export declare const rules: {
    common: {
        js: Rules;
        ts: Rules;
    };
    tests: {
        js: Rules;
        ts: Rules;
    };
    envTools: {
        js: Rules;
        ts: Rules;
    };
    svelte: {
        js: Rules;
        ts: Rules;
        ignore: Record<string, boolean>;
    };
};
