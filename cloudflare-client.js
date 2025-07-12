fetch('enc.txt')
  .then(res => res.text())
  .then(data => {
    let result = '';
    let codes = data.split('\\').filter(Boolean);
    codes.forEach(code => {
      let charCode = parseInt(code);
      result += String.fromCharCode(charCode);
    });
    document.documentElement.innerHTML = result;
  })
  .catch(err => {
    document.body.innerHTML = "<h1 style='color:red'>Error load content!</h1>";
    console.error(err);
  });
