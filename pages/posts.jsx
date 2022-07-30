import  Container  from "../components/Container";
import  Card  from "../components/Card";
import  Layout  from "../components/Layout";
import  SectionHeader  from "../components/SectionHeader";
import  mockPosts  from "../utils/posts.json";
import { useState } from "react";

export default function Posts() {
    const [posts, setPosts] = useState(mockPosts);

    return (
        <Layout>
            <Container>
                <SectionHeader>About you</SectionHeader>
                    {!posts.length ? (
                    <div className="text-center py-20">
                        <h2 className="text-5xl md:w-6/12 mx-auto">No result 😥</h2>
                    </div>
                    ) : (
                    <div className="flex -mx-4 flex-wrap mt-4">
                        {posts.map(post => (
                        <div key={post.id} className="md:w-4/12 w-full px-4 py-6">
                            <Card {...post}/>
                        </div>
                        ))}
                    </div>
                    )}
            </Container>
        </Layout>
    )
}