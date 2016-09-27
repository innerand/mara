var disqus_isloaded = false;

function disqusOnclick(name, url, id) {
   if (!disqus_isloaded) {

      disqus_isloaded = true;
      var disqus_shortname = name;
      var disqus_url = url;
      var disqus_identifier = id;

      var dsq = document.createElement("script");
      dsq.type = 'text/javascript';
      dsq.async = true;
      dsq.src = '//' + name + '.disqus.com/embed.js';
      (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
      }
   }





