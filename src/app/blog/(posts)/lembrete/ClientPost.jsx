'use client';

import dynamic from "next/dynamic";

const Post = dynamic(() => import("./content.mdx"), { ssr: false });

export default function ClientPost() {
  return <Post />;
}
