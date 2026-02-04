function my() {
        var is_on = localStorage.getItem("dark-mode")
        if (is_on === 'y') {
            var template = document.createElement('template');
            template.innerHTML = '<link rel="stylesheet" href="../../css/dark-scrollbar.css" />'.trim();
            console.log(template.content.firstChild)
            document.querySelector('head').appendChild(template.content.firstChild)
            $('body').addClass('dark-mode')
        }

      fetch("../header.html")
      .then((res) => res.text())
      .then((text) => {
        // do something with "text"
        var template = document.createElement('template');
        template.innerHTML = text.trim();
        document.querySelector('header').appendChild(template.content.firstChild)
       })
      .catch((e) => console.error(e));    

      fetch("../footer.html")
      .then((res) => res.text())
      .then((text) => {
        // do something with "text"
        var template = document.createElement('template');
        template.innerHTML = text.trim();
        document.querySelector('.footer-bottom').appendChild(template.content.firstChild)
       })
      .catch((e) => console.error(e));    
  
}