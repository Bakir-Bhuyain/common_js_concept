function loadPost(){
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayPost(data));
}

function displayPost(posts){
      const postContainer = document.getElementById("post-container");
      for(const post of posts){
            const div = createElement('div');
            console.log(post);
            div.innerHTML = `
            <h5>${post.name}</h5>
            <h4>${post.tile}
            <p>${post.description}</p>
            `;
            postContainer.appendChild(div);
      }
}