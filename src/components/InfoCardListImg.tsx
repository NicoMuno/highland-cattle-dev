import React from 'react';
import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

interface InfoCardProps {
  icon: React.ReactNode;
  path: string;
}

interface InfoCardListImgProps extends InfoCardProps {
  imageId: string;
}

const InfoCardListImg = ({ icon, path, imageId }: InfoCardListImgProps) => {
  const { data, error } = useSWR(path, fetcher);

  if (error) return <div>Fehler beim Laden der Daten.</div>;
  if (!data) return <div>Lade...</div>;

  return (
    <div className="farm-card mb-12">
      <div className="flex items-center mb-4">
        {icon}
        <h2 className="text-2xl font-semibold">{data.title}</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <p className="text-text-200 mb-4">{data.description}</p>
          <ul className="space-y-2 text-text-200">
            {data.list?.map((item: string, i: number) => (
              <li key={i}>• {item}</li>
            ))}
          </ul>
        </div>
        <div>
          <img
            src={`/images/${imageId}.jpg`}
            alt={data.title}
            className="w-full h-auto rounded shadow"
          />
        </div>
      </div>
    </div>
  );
};

export default InfoCardListImg;
