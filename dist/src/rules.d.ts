import { Linter } from 'eslint';
export declare type Rules = Linter.Config['rules'];
export declare function jsRulesToTs(jsRules: any): {};
export declare const rulesOrig: {
    common: {
        js: Partial<Linter.RulesRecord>;
        ts: Partial<Linter.RulesRecord>;
    };
    tests: {
        js: Partial<Linter.RulesRecord>;
        ts: Partial<Linter.RulesRecord>;
    };
    envTools: {
        js: Partial<Linter.RulesRecord>;
        ts: Partial<Linter.RulesRecord>;
    };
    svelte: {
        js: Partial<Linter.RulesRecord>;
        ts: Partial<Linter.RulesRecord>;
        ignore: Record<string, boolean>;
    };
};
export declare const rules: {
    common: {
        js: Partial<Linter.RulesRecord>;
        ts: Partial<Linter.RulesRecord>;
    };
    tests: {
        js: Partial<Linter.RulesRecord>;
        ts: Partial<Linter.RulesRecord>;
    };
    envTools: {
        js: Partial<Linter.RulesRecord>;
        ts: Partial<Linter.RulesRecord>;
    };
    svelte: {
        js: Partial<Linter.RulesRecord>;
        ts: Partial<Linter.RulesRecord>;
        ignore: Record<string, boolean>;
    };
};
