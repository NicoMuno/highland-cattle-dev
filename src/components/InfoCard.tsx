import React from 'react';
import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

interface InfoCardProps {
  icon: React.ReactNode;
  path: string; // JSON-file path
}

const InfoCard = ({ icon, path }: InfoCardProps) => {
  const { data, error } = useSWR(path, fetcher);

  if (error) return <div>Fehler beim Laden der Daten.</div>;
  if (!data) return <div>Lade...</div>;

  return (
    <div className="farm-card mb-12">
      <div className="flex items-center mb-4">
        {icon}
        <h2 className="text-2xl font-semibold">{data.title}</h2>
      </div>
      <p className="text-text-200">{data.description}</p>
    </div>
  );
};

export default InfoCard;
