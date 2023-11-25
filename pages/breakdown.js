import Link from 'next/link';
import { getItems, getDepartments, getLocations } from '../lib/read_data';


export async function getStaticProps() 
{
  const items = await getItems();
  const departments = await getDepartments();
  const locations = await getLocations();
  return { props: { items, departments, locations }, revalidate: 30 };
}

export default function Breakdown( { items, departments, locations } ) {
  return (
      <div className="container">
      <h2>Item Breakdown</h2>
        <div className="row">
            <div className="col-md-4">
            <div class="card">
            <h5 class="card-title">Total Items</h5>
              <div class="card-body">
             {items.length}
           </div>
       </div>
      </div>
      <div className="col-md-4">
            <div class="card">
            <h5 class="card-title">Departments Items</h5>
              <div class="card-body">
             {departments.length}
           </div>
       </div>
      </div>
      <div className="col-md-4">
            <div class="card">
            <h5 class="card-title">Locations Items</h5>
              <div class="card-body">
             {locations.length}
           </div>
       </div>
      </div>
      </div>
      </div>
  );
}