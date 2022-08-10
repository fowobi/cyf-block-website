/* paste the JavaScript code from the 'Generated Code' section of the CYF Blocks editor here */

<h1>My CYF Project:Show earnings and expenses</h1>
<p>input value<input id="input"type="text"></input>
</p>
<p>Earnings:<span id="earn-total">0</span></p>
<ul id="earnings-list"></ul>
<p>Expenses:<span id="expense-total">0</span></p>
<ul id="expenses-list"></ul>
<p>Balance:<span id="balance">0</span></p>
<button id="button">Submit</button>  </h1>

<h1>My CYF Project:Build an image carousel</h1>
       <img id="showing-image"src="" width="550" height="450">
      <button id="previous-btn">Previous</button>
      <button id="next-btn">Next</button>
      </h1>
    <h3>
        <p><label for="comment">Feedback from client:</label></p>
<ul id="comment-list">
  <li>The picture are well clear...by wale</li>
  <li>The picture are well arrange...by collins</li>
  <li>The previous button is very slow when press to load the previous image....by ahmed </li>


</ul> 

<textarea id="ta-comment" name="commentary" rows="4" cols="50">please leave feedback here.....</textarea>
  
<button id="comment-sub"class="general-button">Submit</button>

</h3>

 <h1>My CYF Project:Show earnings and expenses</h1>
<p>input value<input id="input"type="text"></input>
</p>
<p>Earnings:<span id="earn-total">0</span></p>
<ul id="earnings-list"></ul>
<p>Expenses:<span id="expense-total">0</span></p>
<ul id="expenses-list"></ul>
<p>Balance:<span id="balance">0</span></p>
<button id="button">Submit</button>  </h1>

<h1>My CYF Project:Build an image carousel</h1>
       <img id="showing-image"src="" width="550" height="450">
      <button id="previous-btn">Previous</button>
      <button id="next-btn">Next</button>
      </h1>
    <h3>
        <p><label for="comment">Feedback from client:</label></p>
<ul id="comment-list">
  <li>The picture are well clear...by wale</li>
  <li>The picture are well arrange...by collins</li>
  <li>The previous button is very slow when press to load the previous image....by ahmed </li>


</ul> 

<textarea id="ta-comment" name="commentary" rows="4" cols="50">please leave feedback here.....</textarea>
  
<button id="comment-sub"class="general-button">Submit</button>

</h3>

 <h1>My CYF Project:Show earnings and expenses</h1>
<p>input value<input id="input"type="text"></input>
</p>
<p>Earnings:<span id="earn-total">0</span></p>
<ul id="earnings-list"></ul>
<p>Expenses:<span id="expense-total">0</span></p>
<ul id="expenses-list"></ul>
<p>Balance:<span id="balance">0</span></p>
<button id="button">Submit</button>  </h1>

<h1>My CYF Project:Build an image carousel</h1>
       <img id="showing-image"src="" width="550" height="450">
      <button id="previous-btn">Previous</button>
      <button id="next-btn">Next</button>
      </h1>
    <h3>
        <p><label for="comment">Feedback from client:</label></p>
<ul id="comment-list">
  <li>The picture are well clear...by wale</li>
  <li>The picture are well arrange...by collins</li>
  <li>The previous button is very slow when press to load the previous image....by ahmed </li>


</ul> 

<textarea id="ta-comment" name="commentary" rows="4" cols="50">please leave feedback here.....</textarea>
  
<button id="comment-sub"class="general-button">Submit</button>

</h3>

 <h1>My CYF Project:Show earnings and expenses</h1>
<p>input value<input id="input"type="text"></input>
</p>
<p>Earnings:<span id="earn-total">0</span></p>
<ul id="earnings-list"></ul>
<p>Expenses:<span id="expense-total">0</span></p>
<ul id="expenses-list"></ul>
<p>Balance:<span id="balance">0</span></p>
<button id="button">Submit</button>  </h1>

<h1>My CYF Project:Build an image carousel</h1>
       <img id="showing-image"src="" width="550" height="450">
      <button id="previous-btn">Previous</button>
      <button id="next-btn">Next</button>
      </h1>
    <h3>
        <p><label for="comment">Feedback from client:</label></p>
<ul id="comment-list">
  <li>The picture are well clear...by wale</li>
  <li>The picture are well arrange...by collins</li>
  <li>The previous button is very slow when press to load the previous image....by ahmed </li>


</ul> 

<textarea id="ta-comment" name="commentary" rows="4" cols="50">please leave feedback here.....</textarea>
  
<button id="comment-sub"class="general-button">Submit</button>

</h3>


var images, arrayimage;


images = ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXtVlX2VSO0azHaX7Bm9T-sRJ-cjZKwO1WOg&usqp=CAU', 'https://images.squarespace-cdn.com/content/v1/5b76c81055b02cf394f9ece5/1558698445226-6F0GSZSGHZUEVBBJEFVH/image3.jpeg?format=1500w', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxE3nN7CYO6oHKQJ5NaKKP1mhkVH6pTaE43Q&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1hhmal0yu4TLHjDABqQI0cJsO_NnzBWgJCA&usqp=CAU'];
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

var comment;

function getNumberOrString(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return value
  } else {
    return number_value
  }
}


comment = [];


document.getElementById('comment-sub').addEventListener('click', (event) => {
  comment = getNumberOrString(document.getElementById('ta-comment').value);
  let element_comment_list = document.getElementById('comment-list');
  let new_li = document.createElement('li');
  let new_ul = document.createElement('ul');
  new_ul.innerText = comment;

  new_li.appendChild(new_ul);

  element_comment_list.appendChild(new_li);

});

