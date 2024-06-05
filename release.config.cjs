const transform = require('./release.utils.cjs');
/**
 * @type {import('semantic-release').GlobalConfig}
 */
module.exports = {
    branches: ['master'],
    plugins: [
        [
            '@semantic-release/commit-analyzer',
            {
                releaseRules: [
                    { type: 'major', release: 'major' },
                    { type: 'feat', release: 'minor' },
                    { type: 'fix', release: 'patch' },
                    { type: 'chore', release: 'patch' },
                    { type: 'build', release: 'patch' },
                    { type: 'ci', release: 'patch' },
                    { type: 'docs', release: 'patch' },
                    { type: 'style', release: 'patch' },
                    { type: 'perf', release: 'patch' },
                    { type: 'test', release: 'patch' },
                    { type: 'refactor', release: 'patch' },
                ],
                parserOpts: {
                    noteKeywords: ['BREAKING', 'BREAKING CHANGE', 'BREAKING CHANGES'],
                },
            },
        ],
        [
            '@semantic-release/release-notes-generator',
            {
                parserOpts: {
                    mergePattern: /^Merge pull request #(\d+) from (.*)$/,
                    mergeCorrespondence: ['id', 'source'],
                },
                writerOpts: {
                    transform: transform,
                },
            },
        ],
        '@semantic-release/changelog',
        '@semantic-release/npm',
        '@semantic-release/github',
    ],
};
