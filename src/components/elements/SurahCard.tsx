import React from 'react';
import { Link } from 'react-router-dom';
import { Surah } from '../../types';

interface SurahCardProps {
  surah: Surah;
}

const SurahCard: React.FC<SurahCardProps> = ({ surah }) => {
  return (
    <div className="max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105">
      <Link to={`/surah/${surah.number}`} className="block p-6">
        <h2 className="mb-2 text-xl font-bold tracking-tight text-gray-100">
          {surah.name.transliteration.id}
        </h2>
        <p className="font-medium text-gray-400">{surah.name.short}</p>
        <p className="text-sm text-gray-300 mt-2">Total Ayat: {surah.numberOfVerses}</p>
      </Link>
    </div>
  );
};

export default SurahCard;

