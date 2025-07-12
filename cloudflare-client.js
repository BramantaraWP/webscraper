fetch('enc.txt')
  .then(res => res.text())
  .then(data => {
    let result = '';
    let codes = data.split('\\').filter(Boolean);
    codes.forEach(code => {
      let charCode = parseInt(code);
      result += String.fromCharCode(charCode);
    });

    // Print hasil decode ke halaman (bukan render HTML ya, tapi tampil mentah)
    document.body.innerHTML = `<pre style="background:#111; color:#eee; padding:20px; overflow:auto;">${result}</pre>`;
  })
  .catch(err => {
    document.body.innerHTML = "<h1 style='color:red'>Gagal load enc.txt!</h1>";
    console.error(err);
  });
