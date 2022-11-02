import type { NextPage } from "next";
import Head from "next/head";
import { trpc } from "../utils/trpc";
import { signIn, signOut, useSession } from "next-auth/react";
import styles from "./index.module.scss";

const Home: NextPage = () => {
  const { data } = trpc.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>Mom's Blog</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,300;0,400;0,600;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.homeContainer}>
        <div className={styles.welcome__container}>
          <div className={styles.welcome__textBox}>
            <h1>TESTTTINNNNNGGG!!!</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem, ab nisi eos mollitia autem consequatur quod suscipit
              inventore porro officia in dicta molestiae voluptatum. Dicta
              similique tempora vel? Asperiores, et? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Quibusdam dignissimos saepe maiores,
              perspiciatis, quae modi quia sit, libero aut dolor voluptates.
              Sunt quam laboriosam impedit eos cumque veritatis quasi eveniet!
            </p>
          </div>
        </div>
        <div className={styles.marketingContainer}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Necessitatibus deleniti nesciunt consequuntur adipisci amet itaque
            non obcaecati blanditiis? Asperiores, molestias quidem non nemo at
            quaerat? Minus voluptatum tempora ea iusto?
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum,
            optio quod, deserunt laudantium iste tenetur et voluptas, vel totam
            nobis quisquam! Alias autem delectus minus, sapiente id quos quae
            voluptatem. Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Eum ipsa modi veniam magni corrupti consequatur soluta
            praesentium molestiae omnis ratione nesciunt adipisci dicta hic est
            corporis sapiente, veritatis fugiat eos?
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum,
            optio quod, deserunt laudantium iste tenetur et voluptas, vel totam
            nobis quisquam! Alias autem delectus minus, sapiente id quos quae
            voluptatem. Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Eum ipsa modi veniam magni corrupti consequatur soluta
            praesentium molestiae omnis ratione nesciunt adipisci dicta hic est
            corporis sapiente, veritatis fugiat eos?
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;

const AuthShowcase: React.FC = () => {
  const { data: secretMessage } = trpc.auth.getSecretMessage.useQuery();

  const { data: sessionData } = useSession();

  return (
    <div className={styles.authShowcase}>
      {sessionData && <p>Logged in as {sessionData?.user?.name}</p>}
      {secretMessage && <p>{secretMessage}</p>}
      <button
        className={styles.signInButton}
        onClick={sessionData ? () => signOut() : () => signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
};
