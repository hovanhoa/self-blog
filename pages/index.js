import Head from "next/head";
import Link from "next/link";
import Image from 'next/image';
import { getDatabase } from "../lib/notion";
import { Text } from "./[id].js";
import styles from "./index.module.css";

export const databaseId = process.env.NOTION_DATABASE_ID;

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>Robert Ho</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.container}>
        <header className={styles.header}>
          <div className={styles.logos}>
            <Image
              src="/hovanhoa-notion.png"
              width="80"
              height="80"
            />
            <svg
              height="80"
              width="20"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="12 0.18999999999999906 487.619 510.941"
            >
            </svg>
            <h2>hey, I'm Robert 👋</h2>
          </div>
            I'm Software Engineer with an academic background in Computer Science and a passion for problem solving and software development. 
            I've been working on Odoo app development more than one year now.
            <br/>
            <br/>
            Skills & Stacks: Python, Javascript, PostgreSQL, Docker<br/> 
          <a
            className="flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="https://file.notion.so/f/f/39d66fae-bf09-4f67-b53e-c713eb27b7d7/fe6ca1f9-97b6-44b7-918a-d699041a78c8/HoVanHoa_Resume.pdf?id=d1579b24-a8d0-4ba9-8fa5-5fd83076657e&table=block&spaceId=39d66fae-bf09-4f67-b53e-c713eb27b7d7&expirationTimestamp=1693735200000&signature=yZAkGahIOgIxS6l8YKFKwVMBuJ2OJ_AawePufIXDOSA&downloadName=HoVanHoa_Resume.pdf"
          >
            <span className="h-7 ml-2">Resume (PDF)</span>
          </a>
          <a
            className="flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/hovanhoa"
          >
            <span className="h-7 ml-2">&nbsp;&nbsp;Github</span>
          </a>
          <br/>
          <br/>
          Thank you for visiting. Have a good day👌
        </header>
        <h2 className={styles.heading}>All Posts</h2>
        <ol className={styles.posts}>
          {posts.map((post) => {
            const date = new Date(post.last_edited_time).toLocaleString(
              "en-US",
              {
                month: "short",
                day: "2-digit",
                year: "numeric",
              }
            );
            return (
              <li key={post.id} className={styles.post}>
                <h3 className={styles.postTitle}>
                  <Link href={`/${post.id}`}>
                    <Text text={post.properties.Name.title} />
                  </Link>
                </h3>

                <p className={styles.postDescription}>{date}</p>
                <Link href={`/${post.id}`}>Read post →</Link>
              </li>
            );
          })}
        </ol>
      </main>
    </div>
  );
}

export const getStaticProps = async () => {
  const database = await getDatabase(databaseId);

  return {
    props: {
      posts: database,
    },
    revalidate: 1,
  };
};
