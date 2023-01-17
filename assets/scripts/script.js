const btn = document.querySelector('button');
const packages =  document.querySelector('.image-placeholder-icon1');

btn.addEventListener('click', function(){
  let randomIndex;
  for( i = 0; i < packages.children.length; i++){
    randomIndex = Math.floor(Math.random() * (i + 1));
    packages.appendChild(packages.children[randomIndex]);
  }
})