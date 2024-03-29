import { useState } from 'react';

export default function useModal(initialStatus: boolean) {
	const [ isOpen, setIsOpen ] = useState(initialStatus);

	function toggle() {
		setIsOpen(!isOpen);
	}

	return {
		isOpen,
		toggle,
	};
}
