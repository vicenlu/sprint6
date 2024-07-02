import React from 'react'
import { QuantityInput } from './QuantityInput'

export const Web = () => {
	return (
		<>
		<div className="flex flex-col items-end mt-14 gap-y-4">
			<QuantityInput label="Nombre de pàgines" />
			<QuantityInput label="Nombre de llenguatges" />
		</div>
		</>
	)
}