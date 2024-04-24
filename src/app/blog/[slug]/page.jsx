'use client'

import { client } from "@/utils/sanity/client/client"

// import { useQuery } from "@tanstack/react-query"

const Post = async () => {

  const posts = await client.fetch(`*[_type == "post"]{title,slug}`)

  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID

  return <div>Post</div>
}

export default Post