fetch('enc.txt')
  .then(res => res.text())
  .then(data => {
    let result = '';
    let codes = data.split('\\').filter(Boolean);
    codes.forEach(code => {
      let charCode = parseInt(code);
      result += String.fromCharCode(charCode);
    });

    // Taruh ke div sementara
    let tempDiv = document.createElement('div');
    tempDiv.innerHTML = result;

    // Append semua link rel=stylesheet
    tempDiv.querySelectorAll('link[rel="stylesheet"]').forEach(link => {
      document.head.appendChild(link);
    });

    // Append semua script src
    tempDiv.querySelectorAll('script[src]').forEach(oldScript => {
      let newScript = document.createElement('script');
      newScript.src = oldScript.src;
      document.body.appendChild(newScript);
    });

    // Eksekusi semua inline script
    tempDiv.querySelectorAll('script:not([src])').forEach(oldScript => {
      let newScript = document.createElement('script');
      newScript.textContent = oldScript.textContent;
      document.body.appendChild(newScript);
    });

    // Tampilkan body content-nya
    document.body.innerHTML = tempDiv.querySelector('body')?.innerHTML || '';

  })
  .catch(err => {
    document.body.innerHTML = "<h1 style='color:red'>Error load content!</h1>";
    console.error(err);
  });
