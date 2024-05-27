import { useRouter } from "next/router";

export default function BlogPagePosts() {
  const router = useRouter();
  console.log(router.query);

  return (
    <div>
      <h1>the blog post</h1>
    </div>
  );
}
