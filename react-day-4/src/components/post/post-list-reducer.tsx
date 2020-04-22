import React, { useState, useEffect, useReducer } from 'react';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface PostListState {
  error: Error | null;
  posts: Post[];
}

const initialState: PostListState = {
  error: null,
  posts: [],
};

function reducer(state: PostListState, action: any) {
  switch (action.type) {
    case 'GET_POST_SUCCESS':
      return {
        ...state,
        posts: action.payload as Post[],
        error: null,
      };
    case 'GET_POST_FAIL':
      return {
        ...state,
        posts: [],
        error: action.payload as Error,
      };
    default:
      return state;
  }
}

export function PostListReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [resubmit, setResubmit] = useState<number | string>(Date.now);
  const { error, posts } = state;

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
        dispatch({
          type: 'GET_POST_SUCCESS',
          payload: jsondata,
        });
      } catch (err) {
        dispatch({
          type: 'GET_POST_FAIL',
          payload: new Error(err.status),
        });
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
