import { ToastOptions, TypeOptions, UpdateOptions, toast } from 'react-toastify';

const toastOptions: ToastOptions = {
	position: 'bottom-left',
	autoClose: 4500,
	hideProgressBar: false,
	closeOnClick: true,
	pauseOnHover: true,
	closeButton: false,
	draggable: true,
	progress: undefined,
	theme: 'light',
	style: {
		width: 'max-content',
		maxWidth: '480px',
		paddingRight: '15px',
	}
};

type ITypeToast = 'info' | 'success' | 'warning' | 'error' | 'default' | 'loading';

function showToast(type: ITypeToast, message: string) {
	switch (type) {
	case 'success':
		return toast.success(message, toastOptions);
	case 'error':
		return toast.error(message, toastOptions);
	case 'info':
		return toast.info(message, toastOptions);
	case 'warning':
		return toast.warning(message, toastOptions);
	case 'loading':
		return toast.loading(message, toastOptions);
	default:
		return toast(message, toastOptions);
	}
}

function showLoadingToast(message: string) {
	const id = toast.loading(message, toastOptions);

	return {
		update: (options: UpdateOptions) => {
			const { render, type, isLoading } = options;
			toast.update(id, { render, type, autoClose: 5000, isLoading });
		},
		clear: () => {
			toast.dismiss(id);
		}
	};
}

interface ToastReceiver {
  update: (options: UpdateOptions<unknown>) => void;
  clear: () => void;
}

function showLoadingToastResult(
	id: ToastReceiver,
	type: TypeOptions,
	message: string,
) {
	return id.update({
		render: message,
		type: type,
		isLoading: false,
	});
}

export { showToast, showLoadingToast, showLoadingToastResult};
