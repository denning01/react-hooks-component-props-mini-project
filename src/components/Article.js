import React from 'react';

function Article({ post }) {
  // Provide default values for the properties of post
  const title = post?.title || "Untitled";
  const date = post?.date || "January 1, 1970";
  const preview = post?.preview || "No preview available";

  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
    </article>
  );
  screen.debug();
}

export default Article;
