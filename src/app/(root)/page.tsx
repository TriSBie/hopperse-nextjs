import { Metadata } from 'next';
import dynamic from 'next/dynamic';

export const metadata: Metadata = {
  title: 'Trang chủ',
  description: 'Chào mừng bạn đến với trang chủ',
};

const HomePage = dynamic(() => import('@/features/home/presentation/HomePage'), {
  loading: () => <div>Loading...</div>,
});

export default function Home() {
  return <HomePage />;
}
