const postList = document.getElementById("postList");
let nextId = 1001;

function fecthPost() {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(posts => {
            postList.innerHTML = "";
            posts.slice(0, 5).forEach(post => {
                const li = document.createElement("li");
                li.innerHTML = `<strong>${post.title}</strong> - ${post.body}
                <button onClick="deletePost(${post.id})">Delete</button>`;
                postList.appendChild(li);
            });
        }).catch(err => console.error(err));
}


function addPost() {
    const title = document.getElementById('titleInput').value;
    const body = document.getElementById('bodyInput').value;

    const newPost = {
        id: nextId++, // 👈 assign your own unique ID
        title,
        body,
        userId: 1
    };

    // Optional: send the POST request (but won't persist)
    fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newPost)
        })
        .then(res => res.json())
        .then(() => {
            alert('Post added!');

            // ✅ Immediately add to UI
            const li = document.createElement('li');
            li.setAttribute('data-id', newPost.id);
            li.innerHTML = `
          <strong>${newPost.title}</strong> - ${newPost.body}
          <button onclick="deletePost(${newPost.id})">Delete</button>
        `;
            postList.prepend(li); // add to top
        })
        .catch(err => console.error(err));
}


function deletePost(id) {

    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: "DELETE"
        })
        .then(() => {
            alert(`Post  ${id} Deleted!`);
            // fecthPost();
            // 👇 Remove the post from the UI without fetching again
            const postItems = document.querySelectorAll(`li[data-id='${id}']`);
            postItems.forEach(li => {
                if (li) {
                    li.remove();
                }
            });
        }).catch(err => console.error(err));
};


fecthPost();