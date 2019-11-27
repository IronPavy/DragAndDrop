const id = document.getElementById('drop_zone')

function dropHandler(ev) {
    ev.preventDefault();
    console.log('Dadoteke su uplodane');
    id.innerHTML = 'Uploadali ste sveeee'
    id.setAttribute('style', 'background-color: lightblue;')
    
  
    if (ev.dataTransfer.items) {
      for (let i = 0; i < ev.dataTransfer.items.length; i++) {
        if (ev.dataTransfer.items[i].kind === 'file') {
          let file = ev.dataTransfer.items[i].getAsFile();
          console.log('Ime dodane slike je ' + file.name);
          console.log('Format dadoteke je ' + file.name.split('.').pop());
          console.log('Veličina dadoteke je ' + Math.round(file.size/1024) + ' KB')
        }
      }
    } 
  }
  function dragOverHandler(ev) {
    ev.preventDefault();
    id.setAttribute('style', 'border-color: black;')
    id.setAttribute('style', 'background-color: lightblue;')
  }


