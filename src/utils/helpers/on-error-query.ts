import type { AxiosError } from 'axios';

export const onErrorQueryHandler = (error: any, toast: any) => {
  toast(((error as AxiosError).response?.data as any).message || '', 'error');
};
