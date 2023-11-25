import Layout from '../../components/layout';
import { getIdList, getPerson } from '../../lib/read_data';

export async function getStaticProps( { params } )
{
  const personData = await getPerson(params.id);
  return {
    props: {
      personData
    }
  };
}

export async function getStaticPaths() 
{
  const paths = getIdList();
  return {
    paths,
    fallback: false
  };
}

export default function displayLieutenants( { personData } ) 
{
  let customFields = personData.custom_fields;
  let customFieldsData = Object.fromEntries(customFields.split(',').map(item => item.split(':')));

  return (
    <Layout>
      <div className="container">
      <article className="card col">
        <div className="card-body">
        <h5 className="form-control">Post Title: {personData.post_title}</h5>
        <div className="form-control my-3">
        <p >Post Content:</p>
        <div dangerouslySetInnerHTML={{__html:personData.post_content}}></div>
        </div>
        <p className="form-control">Post Status: {personData.post_status}</p>
          <p className="form-control">Custom Post Item Type: {customFieldsData.item_type}</p>
          <p className="form-control">Custom Post Item Color: {customFieldsData.item_color}</p>
          <p className="form-control">Custom Post Item Color: {customFieldsData.item_amount}</p>

        </div>
      </article>
      <a href="/" className="btn btn-secondary">Back</a>
      </div>
    </Layout>
  );
}