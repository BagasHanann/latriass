import { useState } from "react";
import Head from 'next/head'
import  Featured  from "../components/Featured";
import  Card  from "../components/Card";
import  Container  from "../components/Container";
import  Layout  from "../components/Layout";
import  mockPosts  from "../utils/posts.json";

export default function Home() {

  const [posts, setPosts] = useState(mockPosts);

  return (
    <Layout>
      <Container>
        <Featured/>
        <div className="flex -mx-4 flex-wrap mt-4">
          {posts.map(post => (
          <div key={post.id} className="md:w-4/12 w-full px-4 py-6">
            <Card {...post}/>
          </div>
          ))}
        </div>
      </Container>
    </Layout>
  )
}