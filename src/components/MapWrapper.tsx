'use client';
import dynamic from 'next/dynamic';

const Map = dynamic(() => import('@/components/Map'), { 
  ssr: false,
  loading: () => <div className="w-full h-80 bg-[#d7d6c2] animate-pulse rounded-lg flex items-center justify-center text-[#45464a]">Carregando mapa...</div>
});

export default function MapWrapper() {
  return <Map />;
}
