let mix = require('laravel-mix')
require('./nova.mix')

mix
  .setPublicPath('dist')
  .vue({ version: 3 })
  .js('resources/js/card.js', 'js')
  .sass('resources/sass/card.scss', 'css')
  .nova('pixelfusion/nova-list-items-card')
