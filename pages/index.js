import Link from 'next/link';
import Layout from '../components/layout';
import { getGeneralsList } from '../lib/read_data';


export async function getStaticProps() 
{
  const americanGenerals = await getGeneralsList();
  return { props: { americanGenerals }, revalidate: 30 };
}

export default function Home( { americanGenerals } ) {
  return (
    <Layout home>
      <div className="container">
      <h1>List of Posts</h1>
      <div className="list-group">
        {americanGenerals.map(
            (post , index) => (
              <Link key={post.id} href={`${post.type}/${post.id}`} className={`list-group-item list-group-item-action ${ index % 2 == 0 ? "list-group-item-secondary" : "list-group-item-light"}`}>
                {post.name}
              </Link>
            )
          )
        }
      </div>
      </div>
    </Layout>
  );
}