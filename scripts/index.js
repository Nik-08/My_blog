
const persent = document.querySelectorAll('.percent');
  persent.forEach(item => {    
    const circle = document.querySelectorAll('.circle');
    h2 = item.querySelectorAll('.percent-value');
    h2.forEach(elem => {
      circle.forEach(i => {
        let str = elem.textContent;      
        let num = Number(str);
        if(i.id == elem.id){
          i.style.strokeDashoffset = `calc(440 - (440 * ${num}) / 100)`;
        }        
      });
    });
  });