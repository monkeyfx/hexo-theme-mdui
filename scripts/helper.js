hexo.extend.generator.register('search',function(site){
    return [
        {
            path: '/search/index.html',
            layout:'search',
            data: {}
        }
    ]
});

hexo.extend.helper.register('customToc', function(){
   return require("./lib/customToc.js").call(hexo,...arguments);
 });

hexo.extend.helper.register('prism', function(){
  return require("./lib/prism/index.js").call(hexo,...arguments);
});

hexo.extend.helper.register('jsLsload', function(){
  return require("./lib/ls/js_lsload.js").call(hexo,...arguments);
});

hexo.extend.helper.register('cssLsload', function(){
  return require("./lib/ls/css_lsload.js").call(hexo,...arguments);
});
