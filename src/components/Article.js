import React from 'react';

function Article({ post }) {
  const defaultDate = "January 1, 1970"; // or any default date you prefer
  const { title, date, preview } = post;

  return (
    <article>
      <h3>{title}</h3>
      <small>{date || defaultDate}</small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;