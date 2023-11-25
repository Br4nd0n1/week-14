import Link from 'next/link';
import Layout from '../components/layout';
import { getItems, getDepartments, getLocations } from '../lib/read_data';
import { useEffect, useRef } from 'react';
import * as d3 from 'd3';

export async function getStaticProps() 
{
  const items = await getItems();
  const departments = await getDepartments();
  const locations = await getLocations();
  return { props: { items, departments, locations }, revalidate: 30 };
}

export default function Charts( { items, departments, locations } ) {
  const chartRef = useRef();

  useEffect(() => {
    const data = [items.length, departments.length, locations.length];
    const labels = ['Items', 'Departments', 'Locations'];
    const color = d3.scaleOrdinal(["#FF5733", "#C70039", "#900C3F"]);
    const pie = d3.pie();
    const arc = d3.arc().innerRadius(0).outerRadius(Math.min(200, 200) / 2);
    
    const svg = d3.select(chartRef.current)
      .append('svg')
      .attr('width', 200)
      .attr('height', 200)
      .append('g')
      .attr('transform', 'translate(' + 200 / 2 + ',' + 200 / 2 + ')');
    
    const group = svg.selectAll('.arc')
      .data(pie(data))
      .enter()
      .append('g')
      .attr('class', 'arc');
    
      group.append('path')
      .attr('d', arc)
      .style('fill', (d, i) => color(i))
      .style("opacity", 0.75);
    
      group.append('text')
      .attr('transform', function(d) { return 'translate(' + arc.centroid(d) + ')'; })
      .attr('text-anchor', 'middle')
      .attr('dominant-baseline', 'central')
      .text(function(d, i) { return labels[i]; });
  }, []);  

  return (
    <Layout home>
      <div className="container">
      <div ref={chartRef}></div>
      </div>
    </Layout>
  );
}
