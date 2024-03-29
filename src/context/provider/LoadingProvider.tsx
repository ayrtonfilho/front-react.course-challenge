import React, { createContext, useState, ReactNode } from 'react';
import LoaderComponent from '../../components/Loader';

interface LoadingContextType {
  isLoading: boolean;
  showLoading: () => void;
  hideLoading: () => void;
}

export const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

interface LoadingProviderProps {
  children: ReactNode;
}

export const LoadingProvider: React.FC<LoadingProviderProps> = ({ children }) => {
	const [isLoading, setIsLoading] = useState(false);

	const showLoading = () => {
		setIsLoading(true);
	};

	const hideLoading = () => {
		setIsLoading(false);
	};

	return (
		<LoadingContext.Provider value={{ isLoading, showLoading, hideLoading }}>
			<LoaderComponent isLoading={isLoading} />
			{children}
		</LoadingContext.Provider>
	);
};
