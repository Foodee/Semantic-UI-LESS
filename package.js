var
  where = 'client' // Adds files only to the client
;

Package.describe({
  name    : 'semantic:ui',
  summary : 'Semantic UI - LESS Release of Semantic UI',
  version : '2.0.0',
  git     : 'git://github.com/Semantic-Org/Semantic-UI-LESS.git',
});

Package.onUse(function(api) {

  api.versionsFrom('1.0');
  api.use('less', 'client');

  api.addFiles([
    '_site/collections/breadcrumb.overrides',
    '_site/collections/breadcrumb.variables',
    '_site/collections/form.overrides',
    '_site/collections/form.variables',
    '_site/collections/grid.overrides',
    '_site/collections/grid.variables',
    '_site/collections/menu.overrides',
    '_site/collections/menu.variables',
    '_site/collections/message.overrides',
    '_site/collections/message.variables',
    '_site/collections/table.overrides',
    '_site/collections/table.variables',
    '_site/elements/button.overrides',
    '_site/elements/button.variables',
    '_site/elements/container.overrides',
    '_site/elements/container.variables',
    '_site/elements/divider.overrides',
    '_site/elements/divider.variables',
    '_site/elements/flag.overrides',
    '_site/elements/flag.variables',
    '_site/elements/header.overrides',
    '_site/elements/header.variables',
    '_site/elements/icon.overrides',
    '_site/elements/icon.variables',
    '_site/elements/image.overrides',
    '_site/elements/image.variables',
    '_site/elements/input.overrides',
    '_site/elements/input.variables',
    '_site/elements/label.overrides',
    '_site/elements/label.variables',
    '_site/elements/list.overrides',
    '_site/elements/list.variables',
    '_site/elements/loader.overrides',
    '_site/elements/loader.variables',
    '_site/elements/rail.overrides',
    '_site/elements/rail.variables',
    '_site/elements/reveal.overrides',
    '_site/elements/reveal.variables',
    '_site/elements/segment.overrides',
    '_site/elements/segment.variables',
    '_site/elements/step.overrides',
    '_site/elements/step.variables',
    '_site/globals/reset.overrides',
    '_site/globals/reset.variables',
    '_site/globals/site.overrides',
    '_site/globals/site.variables',
    '_site/modules/accordion.overrides',
    '_site/modules/accordion.variables',
    '_site/modules/chatroom.overrides',
    '_site/modules/chatroom.variables',
    '_site/modules/checkbox.overrides',
    '_site/modules/checkbox.variables',
    '_site/modules/dimmer.overrides',
    '_site/modules/dimmer.variables',
    '_site/modules/dropdown.overrides',
    '_site/modules/dropdown.variables',
    '_site/modules/embed.overrides',
    '_site/modules/embed.variables',
    '_site/modules/modal.overrides',
    '_site/modules/modal.variables',
    '_site/modules/nag.overrides',
    '_site/modules/nag.variables',
    '_site/modules/popup.overrides',
    '_site/modules/popup.variables',
    '_site/modules/progress.overrides',
    '_site/modules/progress.variables',
    '_site/modules/rating.overrides',
    '_site/modules/rating.variables',
    '_site/modules/search.overrides',
    '_site/modules/search.variables',
    '_site/modules/shape.overrides',
    '_site/modules/shape.variables',
    '_site/modules/sidebar.overrides',
    '_site/modules/sidebar.variables',
    '_site/modules/sticky.overrides',
    '_site/modules/sticky.variables',
    '_site/modules/tab.overrides',
    '_site/modules/tab.variables',
    '_site/modules/transition.overrides',
    '_site/modules/transition.variables',
    '_site/modules/video.overrides',
    '_site/modules/video.variables',
    '_site/views/ad.overrides',
    '_site/views/ad.variables',
    '_site/views/card.overrides',
    '_site/views/card.variables',
    '_site/views/comment.overrides',
    '_site/views/comment.variables',
    '_site/views/feed.overrides',
    '_site/views/feed.variables',
    '_site/views/item.overrides',
    '_site/views/item.variables',
    '_site/views/statistic.overrides',
    '_site/views/statistic.variables',
    'definitions/behaviors/api.js',
    'definitions/behaviors/colorize.js',
    'definitions/behaviors/form.js',
    'definitions/behaviors/state.js',
    'definitions/behaviors/visibility.js',
    'definitions/behaviors/visit.js',
    'definitions/collections/breadcrumb.less',
    'definitions/collections/form.less',
    'definitions/collections/grid.less',
    'definitions/collections/menu.less',
    'definitions/collections/message.less',
    'definitions/collections/table.less',
    'definitions/elements/button.less',
    'definitions/elements/container.less',
    'definitions/elements/divider.less',
    'definitions/elements/flag.less',
    'definitions/elements/header.less',
    'definitions/elements/icon.less',
    'definitions/elements/image.less',
    'definitions/elements/input.less',
    'definitions/elements/label.less',
    'definitions/elements/list.less',
    'definitions/elements/loader.less',
    'definitions/elements/rail.less',
    'definitions/elements/reveal.less',
    'definitions/elements/segment.less',
    'definitions/elements/step.less',
    'definitions/globals/reset.less',
    'definitions/globals/site.js',
    'definitions/globals/site.less',
    'definitions/modules/accordion.js',
    'definitions/modules/accordion.less',
    'definitions/modules/checkbox.js',
    'definitions/modules/checkbox.less',
    'definitions/modules/dimmer.js',
    'definitions/modules/dimmer.less',
    'definitions/modules/dropdown.js',
    'definitions/modules/dropdown.less',
    'definitions/modules/embed.js',
    'definitions/modules/embed.less',
    'definitions/modules/modal.js',
    'definitions/modules/modal.less',
    'definitions/modules/nag.js',
    'definitions/modules/nag.less',
    'definitions/modules/popup.js',
    'definitions/modules/popup.less',
    'definitions/modules/progress.js',
    'definitions/modules/progress.less',
    'definitions/modules/rating.js',
    'definitions/modules/rating.less',
    'definitions/modules/search.js',
    'definitions/modules/search.less',
    'definitions/modules/shape.js',
    'definitions/modules/shape.less',
    'definitions/modules/sidebar.js',
    'definitions/modules/sidebar.less',
    'definitions/modules/sticky.js',
    'definitions/modules/sticky.less',
    'definitions/modules/tab.js',
    'definitions/modules/tab.less',
    'definitions/modules/transition.js',
    'definitions/modules/transition.less',
    'definitions/modules/video.js',
    'definitions/modules/video.less',
    'definitions/views/ad.less',
    'definitions/views/card.less',
    'definitions/views/comment.less',
    'definitions/views/feed.less',
    'definitions/views/item.less',
    'definitions/views/statistic.less',
    'semantic.less',
    'theme.config.example',
    'theme.less',
    'themes/amazon/elements/button.overrides',
    'themes/amazon/elements/button.variables',
    'themes/basic/assets/fonts/icons.eot',
    'themes/basic/assets/fonts/icons.svg',
    'themes/basic/assets/fonts/icons.ttf',
    'themes/basic/assets/fonts/icons.woff',
    'themes/basic/collections/table.overrides',
    'themes/basic/collections/table.variables',
    'themes/basic/elements/button.overrides',
    'themes/basic/elements/button.variables',
    'themes/basic/elements/icon.overrides',
    'themes/basic/elements/icon.variables',
    'themes/basic/elements/step.overrides',
    'themes/basic/elements/step.variables',
    'themes/basic/globals/reset.overrides',
    'themes/basic/globals/reset.variables',
    'themes/basic/modules/progress.overrides',
    'themes/basic/modules/progress.variables',
    'themes/basic/views/card.overrides',
    'themes/basic/views/card.variables',
    'themes/bookish/elements/header.overrides',
    'themes/bookish/elements/header.variables',
    'themes/bootstrap3/elements/button.overrides',
    'themes/bootstrap3/elements/button.variables',
    'themes/chubby/collections/form.overrides',
    'themes/chubby/collections/form.variables',
    'themes/chubby/collections/menu.overrides',
    'themes/chubby/collections/menu.variables',
    'themes/chubby/elements/button.overrides',
    'themes/chubby/elements/button.variables',
    'themes/chubby/elements/header.overrides',
    'themes/chubby/elements/header.variables',
    'themes/chubby/modules/accordion.overrides',
    'themes/chubby/modules/accordion.variables',
    'themes/chubby/views/comment.overrides',
    'themes/chubby/views/comment.variables',
    'themes/classic/collections/table.overrides',
    'themes/classic/collections/table.variables',
    'themes/classic/elements/button.overrides',
    'themes/classic/elements/button.variables',
    'themes/classic/elements/header.overrides',
    'themes/classic/elements/header.variables',
    'themes/classic/modules/progress.overrides',
    'themes/classic/modules/progress.variables',
    'themes/classic/views/card.overrides',
    'themes/classic/views/card.variables',
    'themes/colored/modules/checkbox.overrides',
    'themes/colored/modules/checkbox.variables',
    'themes/default/assets/fonts/icons.eot',
    'themes/default/assets/fonts/icons.otf',
    'themes/default/assets/fonts/icons.svg',
    'themes/default/assets/fonts/icons.ttf',
    'themes/default/assets/fonts/icons.woff',
    'themes/default/assets/fonts/icons.woff2',
    'themes/default/assets/images/flags.png',
    'themes/default/collections/breadcrumb.overrides',
    'themes/default/collections/breadcrumb.variables',
    'themes/default/collections/form.overrides',
    'themes/default/collections/form.variables',
    'themes/default/collections/grid.overrides',
    'themes/default/collections/grid.variables',
    'themes/default/collections/menu.overrides',
    'themes/default/collections/menu.variables',
    'themes/default/collections/message.overrides',
    'themes/default/collections/message.variables',
    'themes/default/collections/table.overrides',
    'themes/default/collections/table.variables',
    'themes/default/elements/button.overrides',
    'themes/default/elements/button.variables',
    'themes/default/elements/container.overrides',
    'themes/default/elements/container.variables',
    'themes/default/elements/divider.overrides',
    'themes/default/elements/divider.variables',
    'themes/default/elements/flag.overrides',
    'themes/default/elements/flag.variables',
    'themes/default/elements/header.overrides',
    'themes/default/elements/header.variables',
    'themes/default/elements/icon.overrides',
    'themes/default/elements/icon.variables',
    'themes/default/elements/image.overrides',
    'themes/default/elements/image.variables',
    'themes/default/elements/input.overrides',
    'themes/default/elements/input.variables',
    'themes/default/elements/label.overrides',
    'themes/default/elements/label.variables',
    'themes/default/elements/list.overrides',
    'themes/default/elements/list.variables',
    'themes/default/elements/loader.overrides',
    'themes/default/elements/loader.variables',
    'themes/default/elements/rail.overrides',
    'themes/default/elements/rail.variables',
    'themes/default/elements/reveal.overrides',
    'themes/default/elements/reveal.variables',
    'themes/default/elements/segment.overrides',
    'themes/default/elements/segment.variables',
    'themes/default/elements/step.overrides',
    'themes/default/elements/step.variables',
    'themes/default/globals/reset.overrides',
    'themes/default/globals/reset.variables',
    'themes/default/globals/site.overrides',
    'themes/default/globals/site.variables',
    'themes/default/modules/accordion.overrides',
    'themes/default/modules/accordion.variables',
    'themes/default/modules/chatroom.overrides',
    'themes/default/modules/chatroom.variables',
    'themes/default/modules/checkbox.overrides',
    'themes/default/modules/checkbox.variables',
    'themes/default/modules/dimmer.overrides',
    'themes/default/modules/dimmer.variables',
    'themes/default/modules/dropdown.overrides',
    'themes/default/modules/dropdown.variables',
    'themes/default/modules/embed.overrides',
    'themes/default/modules/embed.variables',
    'themes/default/modules/modal.overrides',
    'themes/default/modules/modal.variables',
    'themes/default/modules/nag.overrides',
    'themes/default/modules/nag.variables',
    'themes/default/modules/popup.overrides',
    'themes/default/modules/popup.variables',
    'themes/default/modules/progress.overrides',
    'themes/default/modules/progress.variables',
    'themes/default/modules/rating.overrides',
    'themes/default/modules/rating.variables',
    'themes/default/modules/search.overrides',
    'themes/default/modules/search.variables',
    'themes/default/modules/shape.overrides',
    'themes/default/modules/shape.variables',
    'themes/default/modules/sidebar.overrides',
    'themes/default/modules/sidebar.variables',
    'themes/default/modules/sticky.overrides',
    'themes/default/modules/sticky.variables',
    'themes/default/modules/tab.overrides',
    'themes/default/modules/tab.variables',
    'themes/default/modules/transition.overrides',
    'themes/default/modules/transition.variables',
    'themes/default/modules/video.overrides',
    'themes/default/modules/video.variables',
    'themes/default/views/ad.overrides',
    'themes/default/views/ad.variables',
    'themes/default/views/card.overrides',
    'themes/default/views/card.variables',
    'themes/default/views/comment.overrides',
    'themes/default/views/comment.variables',
    'themes/default/views/feed.overrides',
    'themes/default/views/feed.variables',
    'themes/default/views/item.overrides',
    'themes/default/views/item.variables',
    'themes/default/views/statistic.overrides',
    'themes/default/views/statistic.variables',
    'themes/duo/elements/loader.overrides',
    'themes/duo/elements/loader.variables',
    'themes/fixed-width/collections/grid.overrides',
    'themes/fixed-width/collections/grid.variables',
    'themes/fixed-width/modules/modal.overrides',
    'themes/fixed-width/modules/modal.variables',
    'themes/flat/collections/form.overrides',
    'themes/flat/collections/form.variables',
    'themes/flat/globals/site.overrides',
    'themes/flat/globals/site.variables',
    'themes/github/collections/form.overrides',
    'themes/github/collections/form.variables',
    'themes/github/collections/menu.overrides',
    'themes/github/collections/menu.variables',
    'themes/github/collections/message.overrides',
    'themes/github/collections/message.variables',
    'themes/github/elements/button.overrides',
    'themes/github/elements/button.variables',
    'themes/github/elements/segment.overrides',
    'themes/github/elements/segment.variables',
    'themes/github/elements/step.overrides',
    'themes/github/elements/step.variables',
    'themes/gmail/collections/message.overrides',
    'themes/gmail/collections/message.variables',
    'themes/instagram/views/card.overrides',
    'themes/instagram/views/card.variables',
    'themes/material/collections/menu.overrides',
    'themes/material/collections/menu.variables',
    'themes/material/elements/button.overrides',
    'themes/material/elements/button.variables',
    'themes/material/elements/header.overrides',
    'themes/material/elements/header.variables',
    'themes/material/globals/site.overrides',
    'themes/material/globals/site.variables',
    'themes/material/modules/dropdown.overrides',
    'themes/material/modules/dropdown.variables',
    'themes/material/modules/modal.overrides',
    'themes/material/modules/modal.variables',
    'themes/pulsar/elements/loader.overrides',
    'themes/pulsar/elements/loader.variables',
    'themes/raised/elements/button.overrides',
    'themes/raised/elements/button.variables',
    'themes/resetcss/globals/reset.overrides',
    'themes/resetcss/globals/reset.variables',
    'themes/round/elements/button.overrides',
    'themes/round/elements/button.variables',
    'themes/rtl/globals/site.overrides',
    'themes/rtl/globals/site.variables',
    'themes/striped/modules/progress.overrides',
    'themes/striped/modules/progress.variables',
    'themes/timeline/views/feed.overrides',
    'themes/timeline/views/feed.variables',
    'themes/twitter/elements/button.overrides',
    'themes/twitter/elements/button.variables'
  ], 'client');

});
