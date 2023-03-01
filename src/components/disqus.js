import { Disqus, CommentCount } from 'gatsby-plugin-disqus'
import React from 'react'

const DisqusTemplate = () => {
  return (
    <>
      <h1>{post.title}</h1>
      <CommentCount config={disqusConfig} placeholder={'...'} />
      /* Post Contents */
      <Disqus config={disqusConfig} />
    </>
  )
}

export default DisqusTemplate
