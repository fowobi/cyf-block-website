/* paste the JavaScript code from the 'Generated Code' section of the CYF Blocks editor here */

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
