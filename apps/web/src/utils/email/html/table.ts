type TableDataProps = {
    [key: string]: string
}

const table = (tableData: TableDataProps) => `
<div class="table">
<table>
<tbody>
${Object.entries(tableData)
    .map(
        ([key, value]) => `
<tr>
<th>${key}</th>
<td>${value}</td>
</tr>
`
    )
    .join('')}
</tbody>
</table>
</div>
`

export default table
