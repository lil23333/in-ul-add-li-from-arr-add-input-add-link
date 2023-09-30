
let parent = document.querySelector('#parent');
let btn = document.querySelector('#btn');
btn.addEventListener('click', function func () {
  let arr = ['lala', 'tada', 'dohh'];
  for (let i = 0; i < arr.length; i++) {
    let li = document.createElement('li');
    li.textContent = arr[i];
    parent.appendChild(li);


let input = document.createElement('input');
input.value = li.textContent;
li.textContent = '';
li.appendChild(input);



input.addEventListener('blur', ()=> {
  li.textContent = input.value;

  let a = document.createElement('a');
  a.href = '';
  a.textContent = 'remove';
  li.appendChild(a);
  
  a.addEventListener('click', function (e) {
    li.remove();
    e.preventDefault();
  });
 });

li.removeEventListener('click', func);


  }
});

