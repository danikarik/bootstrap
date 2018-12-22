let mix = require('laravel-mix');
let tailwindcss = require('tailwindcss');

mix
    .js('resources/assets/js/app.js', 'static/js')
    .ts('resources/assets/ts/index.tsx', 'static/ui')
    .sass('resources/assets/sass/app.scss', 'static/css')
    .options({
        processCssUrls: false,
        postCss: [ tailwindcss('./tailwind.js') ],
    })
    .copy('resources/assets/img/favicon.ico', 'static')
    .extract()
    .sourceMaps()
    .setPublicPath('static');
