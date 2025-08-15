import { useEffect, useState } from 'react';

export default function useMediaQuery(query) {
	const getMatch = () => {
		if (typeof window === 'undefined') return false;
		return window.matchMedia(query).matches;
	};

	const [matches, setMatches] = useState(getMatch);

	useEffect(() => {
		if (typeof window === 'undefined') return;
		const mediaQueryList = window.matchMedia(query);
		const handler = (event) => setMatches(event.matches);
		try {
			mediaQueryList.addEventListener('change', handler);
		} catch (_) {
			// Safari
			mediaQueryList.addListener(handler);
		}
		setMatches(mediaQueryList.matches);
		return () => {
			try {
				mediaQueryList.removeEventListener('change', handler);
			} catch (_) {
				mediaQueryList.removeListener(handler);
			}
		};
	}, [query]);

	return matches;
} 