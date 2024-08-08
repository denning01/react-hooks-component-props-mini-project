import React from 'react'
import Article from './Article'

function ArticleList({posts}) {
  return (
    <main>
        {
            posts.map((post)=>{
                return (<Article  post={post} key={post.id}/>)
            })
        }
        
    </main>
  )
}

export default ArticleList