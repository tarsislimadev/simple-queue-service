const a = document.getElementById('a')

setInterval(() => a.href = `./queue/?id=${Date.now()}`, 1000)
