
(function() {
    let field = document.querySelector('.items');
    let li = Array.from(field.children);
    
    function FilterProduct() {
        li.forEach(i => {
        const name = i.querySelector('strong');
        const x = name.textContent;
        i.setAttribute("data-category", x);
    });

    let indicator = Array.from(document.querySelector('.indicator').children);
    
    this.run = function() {
      indicator.forEach(i => {
        i.onclick = function () {
          indicator.forEach(x => x.classList.remove('active'));
          this.classList.add('active');
          const displayItems = this.getAttribute('data-filter');
    
          li.forEach(z => {
            z.style.transform = "scale(0)";
            setTimeout(() => {
              z.style.display = "none";
            }, 500);
    
            if (z.getAttribute('data-category') === displayItems || displayItems === "all") {
              z.style.transform = "scale(1)";
              setTimeout(() => {
                z.style.display = "block";
              }, 500);
            }
          });
        };
      });
    }
    }
    
    function SortProduct() {
    let select = document.getElementById('select');
    let ar = [];
    
    li.forEach(i => {
      const last = i.lastElementChild;
      const x = last.textContent.trim();
      const y = Number(x.substring(1));
      i.setAttribute("data-price", y);
      ar.push(i);
    });
    
    this.run = function() {
      select.onchange = function() {
        if (this.value === 'Default') {
          while (field.firstChild) {field.removeChild(field.firstChild);}
          field.append(...ar);	
        }
        if (this.value === 'LowToHigh') {
          SortElem(field, li, true);
        }
        if (this.value === 'HighToLow') {
          SortElem(field, li, false);
        }
      };
    };
    
    function SortElem(field, li, asc) {
      const dm = asc ? 1 : -1;
      const sortli = li.sort((a, b) => {
        const ax = a.getAttribute('data-price');
        const bx = b.getAttribute('data-price');
        return ax > bx ? (1 * dm) : (-1 * dm);
      });
    
      while (field.firstChild) {field.removeChild(field.firstChild);}
      field.append(...sortli);	
    }
    }
    
    new FilterProduct().run();
    new SortProduct().run();
    })();