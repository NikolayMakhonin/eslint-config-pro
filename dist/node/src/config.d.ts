export declare const config: {
    extends: string[];
    plugins: string[];
    rules: {
        [x: string]: string | [level: string, ...options: any[]];
    };
    env: {
        es6: boolean;
        node: boolean;
        browser: boolean;
    };
    parserOptions: {
        ecmaVersion: string;
        sourceType: string;
    };
    ignorePatterns: string[];
    overrides: ({
        files: string[];
        plugins: string[];
        rules: {
            'global-require': string;
            strict?: undefined;
            semi?: undefined;
            'semi-style'?: undefined;
            'no-extra-semi'?: undefined;
            'prefer-rest-params'?: undefined;
            'no-var'?: undefined;
            'vars-on-top'?: undefined;
            'comma-dangle'?: undefined;
        };
        parserOptions: {
            sourceType: string;
            ecmaFeatures?: undefined;
            tsconfigRootDir?: undefined;
            project?: undefined;
            extraFileExtensions?: undefined;
            ecmaVersion?: undefined;
        };
        extends?: undefined;
        parser?: undefined;
        processor?: undefined;
        env?: undefined;
        settings?: undefined;
        overrides?: undefined;
    } | {
        files: string[];
        plugins: string[];
        rules: {
            'global-require': string;
            strict: string;
            semi?: undefined;
            'semi-style'?: undefined;
            'no-extra-semi'?: undefined;
            'prefer-rest-params'?: undefined;
            'no-var'?: undefined;
            'vars-on-top'?: undefined;
            'comma-dangle'?: undefined;
        };
        parserOptions?: undefined;
        extends?: undefined;
        parser?: undefined;
        processor?: undefined;
        env?: undefined;
        settings?: undefined;
        overrides?: undefined;
    } | {
        files: string[];
        plugins: string[];
        rules: {
            'global-require': string;
            strict?: undefined;
            semi?: undefined;
            'semi-style'?: undefined;
            'no-extra-semi'?: undefined;
            'prefer-rest-params'?: undefined;
            'no-var'?: undefined;
            'vars-on-top'?: undefined;
            'comma-dangle'?: undefined;
        };
        parserOptions?: undefined;
        extends?: undefined;
        parser?: undefined;
        processor?: undefined;
        env?: undefined;
        settings?: undefined;
        overrides?: undefined;
    } | {
        files: string[];
        parserOptions: {
            sourceType: string;
            ecmaFeatures: {
                globalReturn: boolean;
            };
            tsconfigRootDir?: undefined;
            project?: undefined;
            extraFileExtensions?: undefined;
            ecmaVersion?: undefined;
        };
        plugins?: undefined;
        rules?: undefined;
        extends?: undefined;
        parser?: undefined;
        processor?: undefined;
        env?: undefined;
        settings?: undefined;
        overrides?: undefined;
    } | {
        files: string[];
        extends: string[];
        parser: string;
        plugins: string[];
        parserOptions: {
            tsconfigRootDir: string;
            project: string;
            extraFileExtensions: string[];
            sourceType?: undefined;
            ecmaFeatures?: undefined;
            ecmaVersion?: undefined;
        };
        rules: {
            [x: string]: string | [level: string, ...options: any[]];
            'global-require'?: undefined;
            strict?: undefined;
            semi?: undefined;
            'semi-style'?: undefined;
            'no-extra-semi'?: undefined;
            'prefer-rest-params'?: undefined;
            'no-var'?: undefined;
            'vars-on-top'?: undefined;
            'comma-dangle'?: undefined;
        };
        processor?: undefined;
        env?: undefined;
        settings?: undefined;
        overrides?: undefined;
    } | {
        files: string[];
        processor: string;
        env: {
            es6: boolean;
            node: boolean;
            browser: boolean;
            mocha?: undefined;
        };
        plugins: string[];
        rules: {
            [x: string]: string | [level: string, ...options: any[]];
            'global-require'?: undefined;
            strict?: undefined;
            semi?: undefined;
            'semi-style'?: undefined;
            'no-extra-semi'?: undefined;
            'prefer-rest-params'?: undefined;
            'no-var'?: undefined;
            'vars-on-top'?: undefined;
            'comma-dangle'?: undefined;
        };
        settings: {
            'svelte3/typescript': boolean;
            'svelte3/ignore-warnings': (warn: any) => boolean;
            'html/indent'?: undefined;
            'html/report-bad-indent'?: undefined;
            'html/html-extensions'?: undefined;
        };
        parserOptions?: undefined;
        extends?: undefined;
        parser?: undefined;
        overrides?: undefined;
    } | {
        files: string[];
        rules: {
            semi: string[];
            'semi-style': string[];
            'no-extra-semi': string;
            'prefer-rest-params': string;
            'no-var': string;
            'vars-on-top': string;
            strict: string[];
            'comma-dangle': string;
            'global-require'?: undefined;
        };
        env: {
            es6: boolean;
            node: boolean;
            browser: boolean;
            mocha?: undefined;
        };
        plugins: string[];
        parser: string;
        settings: {
            'html/indent': string;
            'html/report-bad-indent': string;
            'html/html-extensions': string[];
            'svelte3/typescript'?: undefined;
            'svelte3/ignore-warnings'?: undefined;
        };
        parserOptions: {
            ecmaVersion: number;
            sourceType: string;
            ecmaFeatures?: undefined;
            tsconfigRootDir?: undefined;
            project?: undefined;
            extraFileExtensions?: undefined;
        };
        extends?: undefined;
        processor?: undefined;
        overrides?: undefined;
    } | {
        files: string[];
        env: {
            mocha: boolean;
            es6?: undefined;
            node?: undefined;
            browser?: undefined;
        };
        rules: {
            [x: string]: string | [level: string, ...options: any[]];
            'global-require'?: undefined;
            strict?: undefined;
            semi?: undefined;
            'semi-style'?: undefined;
            'no-extra-semi'?: undefined;
            'prefer-rest-params'?: undefined;
            'no-var'?: undefined;
            'vars-on-top'?: undefined;
            'comma-dangle'?: undefined;
        };
        overrides: {
            files: string[];
            rules: {
                [x: string]: string | [level: string, ...options: any[]];
            };
        }[];
        plugins?: undefined;
        parserOptions?: undefined;
        extends?: undefined;
        parser?: undefined;
        processor?: undefined;
        settings?: undefined;
    } | {
        files: string[];
        rules: {
            [x: string]: string | [level: string, ...options: any[]];
            'global-require'?: undefined;
            strict?: undefined;
            semi?: undefined;
            'semi-style'?: undefined;
            'no-extra-semi'?: undefined;
            'prefer-rest-params'?: undefined;
            'no-var'?: undefined;
            'vars-on-top'?: undefined;
            'comma-dangle'?: undefined;
        };
        overrides: {
            files: string[];
            rules: {
                [x: string]: string | [level: string, ...options: any[]];
            };
        }[];
        plugins?: undefined;
        parserOptions?: undefined;
        extends?: undefined;
        parser?: undefined;
        processor?: undefined;
        env?: undefined;
        settings?: undefined;
    })[];
};
