module.exports = {
    env: {
        test: {
            presets: [
                [
                    '@babel/preset-env',
                    {
                        // debug: true,
                        targets: {
                            node: 'current',
                        },
                    },
                ],
            ]
        }
    }
};