import React, { useState, useEffect } from 'react';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export function PostList() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [resubmit, setResubmit] = useState<number | string>(Date.now);

  function onResubmit() {
    setResubmit('');
  }

  useEffect(() => {
    // fetch('https://jsonplaceholder.typicode.com/posts-1234123412341234')
    //   .then((response) => {
    //     if (response.status >= 200 && response.status <= 299) {
    //       return response.json();
    //     }
    //     throw response;
    //   })
    //   .then((res) => {
    //     setPosts(res);
    //   })
    //   .catch((err) => {
    //     setError(new Error(err.status));
    //   });
    async function getPosts() {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/posts' + resubmit
        );
        if (response.status > 299 || response.status < 200) {
          throw response;
        }
        const jsondata = await response.json();
        setPosts(jsondata);
        setError(null);
      } catch (err) {
        setError(new Error(err.status));
      }
    }

    getPosts();
  }, [resubmit]);

  return (
    <div>
      <h3>List post:</h3>
      <button onClick={onResubmit}>Resubmit</button>

      {error && <p>{error.message}</p>}
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <h4>{post.title}</h4>
            <p>{post.body}</p>
          </div>
        );
      })}
    </div>
  );
}
