const postsUrl = 'https://jsonplaceholder.typicode.com/posts';

async function getPosts() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();
  return data;
}

async function outPosts() {
  const posts = await getPosts();
  console.log(posts[2]);
}

outPosts();