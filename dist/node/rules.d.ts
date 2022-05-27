declare type Rules = Record<string, string | [level: string, ...options: any]>;
declare const rulesJavaScript: Rules;
declare const rulesTypeScript: Rules;
declare const rulesTestsAndEnv: {
    js: Rules;
    ts: Rules;
};
declare const rulesTests: {
    js: Rules;
    ts: Rules;
};
declare const rulesSvelte: {
    js: Rules;
    ts: Rules;
    ignore: Record<string, boolean>;
};
declare const rulesEnvTools: {
    js: Rules;
    ts: Rules;
};
