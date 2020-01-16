import * as d3 from 'd3';

export default function tableFactory(_rows) {
  const rows = Array.from(_rows);
  const header = rows.shift(); // Первая строка - заголовок

  const table = d3.select('body')
    .append('table')
    .attr('class', 'table');

  table.append('thead')
    .append('tr')
    .selectAll('td')
    .data(header)
    .enter()
    .append('th')
    .text(d => d)
  ;
  table.append('tbody')
    .selectAll('tr')
    .data(rows)
    .enter()
    .append('tr')
    .selectAll('td')
    .data(d => d)
    .enter()
    .append('td')
    .text(d => d)
  ;
  /*

    d3.selectAll('tbody tr').selectAll('td').style('color',(d,i)=> i%2 ? 'green' : 'red');
  // const newCol = d3.selectAll('tr').append('td').text((d,i)=>['Seven', 'u','j','m'][i]);*/
  return {
    table,
    header,
    rows,
  };
}
