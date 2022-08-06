/* paste the JavaScript code from the 'Generated Code' section of the CYF Blocks editor here */

var noun, verb, adjective, animal;

function randomInt(n) {
  // Return a random number from in [0, n[
  return Math.floor(Math.random()*n);
}

function randomMember(arr) {
  // Return a random member of the array
  return arr[randomInt(arr.length)]
}


noun = ['man', 'woman', 'boy'];
verb = ['run', 'saw', 'beat'];
adjective = ['handsome', 'beautiful', 'annoyed'];
animal = ['lion', 'tiger', 'dog'];
let element_noun = document.getElementById('noun');
element_noun.innerText = randomMember(noun);
let element_verb = document.getElementById('verb');
element_verb.innerText = randomMember(verb);
let element_adjective = document.getElementById('adjective');
element_adjective.innerText = randomMember(adjective);
let element_animal = document.getElementById('animal');
element_animal.innerText = randomMember(animal);













var sheepcount, animal_name, othercount;

function getNumberOrString(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return value
  } else {
    return number_value
  }
}


sheepcount = 0;
othercount = 0;


document.getElementById('addingid').addEventListener('click', (event) => {
  animal_name = getNumberOrString(document.getElementById('text').value);
  if (animal_name == 'sheep') {
    sheepcount = (typeof sheepcount === 'number' ? sheepcount : 0) + 1;
    let element_sheep_count = document.getElementById('sheep_count');
    element_sheep_count.innerText = sheepcount;
  } else {
    othercount = (typeof othercount === 'number' ? othercount : 0) + 1;
    let element_other_count = document.getElementById('other_count');
    element_other_count.innerText = othercount;
  }

});











var earnings, input_value, expenses, balance, earning_total, expenses_total;

var fruit, emojis;


fruit = ['apple', 'grape', 'mango'];
emojis = ['🍎', '🍇', '🥭'];
let element_list = document.getElementById('list');
while (!!fruit.length) {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  let new_li = document.createElement('li');
  let new_span = document.createElement('span');
  new_span.innerText = fruit.shift();
  let new_span2 = document.createElement('span');
  new_span2.innerText = emojis.shift();

  new_span.appendChild(new_span2);

  new_li.appendChild(new_span);

  element_list.appendChild(new_li);
}














var images, arrayimage;


images = ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1PMUsNd1YIoz_zryXnCogTASsRp2CxW5jlA&usqp=CAU', 'https://images.squarespace-cdn.com/content/v1/5b76c81055b02cf394f9ece5/1558698445226-6F0GSZSGHZUEVBBJEFVH/image3.jpeg?format=1500w', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxE3nN7CYO6oHKQJ5NaKKP1mhkVH6pTaE43Q&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1hhmal0yu4TLHjDABqQI0cJsO_NnzBWgJCA&usqp=CAU'];
let element_showing_image = document.getElementById('showing-image');
arrayimage = images.shift();
element_showing_image.setAttribute("src", arrayimage);
images.push(arrayimage);


document.getElementById('next-btn').addEventListener('click', (event) => {
  let element_showing_image2 = document.getElementById('showing-image');
  arrayimage = images.shift();
  element_showing_image2.setAttribute("src", arrayimage);
  images.push(arrayimage);

});

document.getElementById('previous-btn').addEventListener('click', (event) => {
  let element_showing_image3 = document.getElementById('showing-image');
  arrayimage = images.pop();
  element_showing_image3.setAttribute("src", arrayimage);
  images.unshift(arrayimage);

});
    











function getNumberOrString(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return value
  } else {
    return number_value
  }
}


earnings = [];
expenses = [];
balance = [];
earning_total = 0;
expenses_total = 0;


document.getElementById('button').addEventListener('click', (event) => {
  input_value = getNumberOrString(document.getElementById('input').value);
  if (input_value > 0) {
    earnings.unshift(input_value);
    let element_earnings_list = document.getElementById('earnings-list');
    let new_li = document.createElement('li');
    let new_span = document.createElement('span');
    new_span.innerText = earnings.reduce((a,b) => a+b, 0);

    new_li.appendChild(new_span);

    element_earnings_list.appendChild(new_li);
  }
  let element_earn_total = document.getElementById('earn-total');
  element_earn_total.innerText = earnings.reduce((a,b) => a+b, 0);

});

document.getElementById('button').addEventListener('click', (event) => {
  input_value = getNumberOrString(document.getElementById('input').value);
  if (input_value < 0) {
    expenses.unshift(input_value);
    let element_expenses_list = document.getElementById('expenses-list');
    let new_li2 = document.createElement('li');
    let new_span2 = document.createElement('span');
    new_span2.innerText = expenses.reduce((a,b) => a+b, 0);

    new_li2.appendChild(new_span2);

    element_expenses_list.appendChild(new_li2);
  }
  let element_expense_total = document.getElementById('expense-total');
  element_expense_total.innerText = expenses.reduce((a,b) => a+b, 0);

});

document.getElementById('button').addEventListener('click', (event) => {
  balance.unshift(getNumberOrString(document.getElementById('input').value));
  let element_balance = document.getElementById('balance');
  element_balance.innerText = balance.reduce((a,b) => a+b, 0);

});
