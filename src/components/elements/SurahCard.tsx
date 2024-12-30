import React from 'react';
import { Link } from 'react-router-dom';
import { Surah } from '../../types';

interface SurahCardProps {
  surah: Surah;
}

const SurahCard: React.FC<SurahCardProps> = ({ surah }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105">
      <Link to={`/surat/${surah.number}`} className="block">
        <h2 className="text-xl font-semibold text-gray-900">{surah.name.transliteration.id}</h2>
        <p className="text-gray-600">{surah.name.short}</p>
        <p className="text-sm text-gray-700 mt-2">Total Ayat: {surah.numberOfVerses}</p>
      </Link>
    </div>
  );
};

export default SurahCard;
