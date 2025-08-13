import React, { useState } from 'react'

export default function ProdTable({ headers_prop, rows_prop }) {
	const headers = headers_prop
	const rows = rows_prop

	// const handleCellChange = (rowIndex, colIndex, value) => {
	// 	const updated = [...rows]
	// 	updated[rowIndex][colIndex] = value
	// 	setRows(updated)
	// }

	return (
		<div>
			<h1>ХАРАКТЕРИСТИКИ</h1>
			<table style={{ borderCollapse: 'collapse', width: '80%' }}>
				<thead>
					<tr>
						{headers.map((header, i) => (
							<th
								key={i}
								style={{
									border: '1px solid #ccc',
									padding: '10px',
									backgroundColor: '#f5f5f5',
									textAlign: 'left',
								}}
							>
								{header}
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{rows.map((row, rowIndex) => (
						<tr key={rowIndex}>
							{row.map((cell, colIndex) => (
								<td
									key={colIndex}
									style={{
										border: '1px solid #ccc',
										padding: '10px',
										backgroundColor: rowIndex % 2 === 0 ? '#fff' : '#f8f8f8',
									}}
								>
									<input
										disabled
										style={{
											width: '100%',
											border: 'none',
											background: 'transparent',
											outline: 'none',
										}}
										value={cell}
									/>
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}
