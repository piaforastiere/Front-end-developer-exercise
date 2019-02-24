

const app = document.getElementById('root');

const container = document.createElement('section');
container.setAttribute('class', 'container-post');


app.appendChild(container);


//async call to the API
async function fetchPosts(endpoint) {
  const res = await fetch(endpoint);
  const data = await res.json();

  return data;
}

//request
fetchPosts('https://jsonplaceholder.typicode.com/posts')
.then(data => {
  data.forEach(
    function(post, i){
      if (i<5){ //show only the first 5 post
        displayPost(post);
        addClass();
      }
    }
  )
}

)
.catch(err => console.log("sorry, there was an error", err.message));

//function to create and show each Post
function displayPost(post){
  var idPost = post.id;
  const postContent = document.createElement('div');
  postContent.setAttribute('id',`post${idPost}`);
  postContent.setAttribute('class', 'post-text');


  const title = document.createElement('h1');
  title.setAttribute('class', 'title-post')
  title.textContent = post.title;

  body = post.body;
  const bodyPostLeft = document.createElement('div');
  const bodyPostRight = document.createElement('div');

  text = body+"<br>\n<br>\n";
  bodyPostLeft.innerHTML = text.repeat(5);
  bodyPostLeft.setAttribute('class', 'body-post');


  container.appendChild(postContent);

  postContent.appendChild(title);
  postContent.appendChild(bodyPostLeft);




}

//asign the active class to the first post
function addClass(){
  if(!$("#post1").hasClass('active')){
    $("#post1").addClass('active');
    $('.loader').hide();
  }
}

//active post
function activeClass(myvar){
  $(".post-text").removeClass('active');
  // $("#card"+myvar).addClass('active');
  $("#post"+myvar).toggleClass('active')

}

//email verification with alert and message
function checkEmail() {

    var email = document.getElementById('txtEmail');
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!filter.test(email.value)) {
    alert('Please provide a valid email address');
    email.focus;

 } else{
   $('.message').append( "<p>You're subscribed</p>" );
   $('.form').hide(500);

 }
}
