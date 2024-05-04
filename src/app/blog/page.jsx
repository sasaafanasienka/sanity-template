// import { Container, Section } from "@/shared/ui"
// import { client } from ""
// import {client} from '@/utils/sanity/client/client';



const Blog = async () => {

  const posts = await client.fetch(`*[_type == "post"]{ title, slug }`)

  return <>
    <Section>
      <Container>
        {(posts || []).map((post) => (
          <div>{post.title}</div>
        ))}
      </Container>
    </Section>
  </>
  
}

export default Blog