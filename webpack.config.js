import ImageMinimizerPlugin, {
    sharpMinify,
} from 'image-minimizer-webpack-plugin';

export const module = {
    rules: [
        // You need this, if you are using `import file from "file.ext"`, for `new URL(...)` syntax you don't need it
        {
            test: /\.(jpe?g|png)$/i,
            type: 'asset',
        },
    ],
};
export const optimization = {
    minimizer: [
        new ImageMinimizerPlugin({
            minimizer: {
                implementation: sharpMinify,
                options: {
                    encodeOptions: {
                        jpeg: {
                            // https://sharp.pixelplumbing.com/api-output#jpeg
                            quality: 100,
                        },
                        webp: {
                            // https://sharp.pixelplumbing.com/api-output#webp
                            lossless: true,
                        },
                        avif: {
                            // https://sharp.pixelplumbing.com/api-output#avif
                            lossless: true,
                        },

                        // png by default sets the quality to 100%, which is same as lossless
                        // https://sharp.pixelplumbing.com/api-output#png
                        png: {},

                        // gif does not support lossless compression at all
                        // https://sharp.pixelplumbing.com/api-output#gif
                        gif: {},
                    },
                },
            },
        }),
    ],
};
