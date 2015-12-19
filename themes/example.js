;(function(){
  var templates = document.getElementsByTagName('template');
  for(var i = 0, len = templates.length, item, itemHtml; i < len; i++){
    item = templates[i];
    itemHtml = item.innerHTML;
    item.parentNode.insertBefore(creatP(itemHtml),item);
  }

  function creatP(html){
    var pre = document.createElement('pre');
    pre.className = 'e-code-show';
    pre.innerText = html;
    return pre;
  }
})();