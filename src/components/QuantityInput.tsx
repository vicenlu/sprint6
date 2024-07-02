import React from 'react'

export const QuantityInput = ({label}) => {
	return (
		<div className="flex flex-row items-center gap-x-4">
			<p className="w-full">{label}</p>
			<div className="flex flex-row gap-x-1">
				<button className="btn btn-circle btn-xs">➖</button>
				<input
					type="number"
					placeholder="1"
					className="input input-bordered input-xs" />
				<button className="btn btn-circle btn-xs">➕</button>
			</div>
		</div>
	)
}