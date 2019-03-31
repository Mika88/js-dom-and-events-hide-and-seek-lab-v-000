function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('.target');
}

function deepestChild() {
  const elements = document.getElementById('grand-node').querySelectorAll('div');
  let element = ""

  for (let i = 0; i < elements.length; i++) {
     element = elements[i];
  }
  return element
}

function increaseRankBy(n) {
  const lis = document.querySelectorAll('ul.ranked-list li');

  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = parseInt(lis[i].innerHTML, 10) + n;
  }
}
