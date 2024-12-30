import React from 'react';
import VerseCard from '../elements/VerseCard';
import { Surah } from '../../types';

interface SurahDetailProps {
  surah: Surah;
}

const SurahDetail: React.FC<SurahDetailProps> = ({ surah }) => {
  return (
    <div className="max-w-4xl mx-auto bg-gray-800 border border-gray-700 rounded-lg shadow-md p-6">
      <h2 className="text-3xl font-bold text-gray-100 mb-4">{surah.name.transliteration.id}</h2>
      <p className="text-gray-400 mb-6">{surah.tafsir.id}</p>
      <div className="space-y-6">
        {surah.verses.map((verse) => (
          <VerseCard key={verse.number.inQuran} verse={verse} />
        ))}
      </div>
    </div>
  );
};

export default SurahDetail;

