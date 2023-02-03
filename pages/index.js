import Link from "next/link";
import Date from "../components/date";
import Layout from "../components/layout";
import homeStyle from "../styles/home.module.css";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Image from "next/image";
export default function Home({ allPostsData }) {
  return (
    <div id="main">
      <div className={homeStyle.headBg}>
        <div className={homeStyle.homeInfo}>
          <span className={homeStyle.loop}></span>
          <span className={homeStyle.loop}></span>
          <span className={homeStyle.loop}></span>
          <span className={homeStyle.loop}></span>
          <span className={homeStyle.info}>
            <div className={homeStyle.wrap}>
              <Image priority src="/images/profile.png" className={utilStyles.borderCircle} height={144} width={144} alt="" />
              <h2>Nephrite</h2>
              <h5>Welcome To My Blog!</h5>
            </div>
          </span>
        </div>
      </div>
    </div>
    // <Layout home>
    //   <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
    //     <h2 className={`${utilStyles.headingLg} text-center text-red-500`}>Welcome To My Blog</h2>
    //     <ul className={utilStyles.list}>
    //       {allPostsData.map(({ id, date, title }) => (
    //         <li className={`${utilStyles.listItem} flex justify-end flex-col items-end`} key={id}>
    //           <Link className={"w-full"} href={`/posts/${id}`}>
    //             {title}
    //           </Link>
    //           <small className={`${utilStyles.lightText}`}>
    //             <Date dateString={date} />
    //           </small>
    //         </li>
    //       ))}
    //     </ul>
    //   </section>
    // </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
