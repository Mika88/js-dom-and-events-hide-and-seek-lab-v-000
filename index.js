function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('.target');
}

function deepestChild() {
  const children = document
  .getElementById('grand-node')
  .querySelectorAll('div');

  for (let i = 0; i < children.length; i++) {
     return children[i].textContent;
  }
}

function increaseRankBy(n) {
  const lis = document
  .querySelectorAll('ul.ranked-list li');

for (let i = 0; i < lis.length; i++) {
  lis[i].innerHTML = (i + 1).toString();
}
}
