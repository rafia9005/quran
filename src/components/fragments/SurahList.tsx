import React from 'react';
import SurahCard from '../elements/SurahCard';
import { Surah } from '../../types';

interface SurahListProps {
  surahs: Surah[];
}

const SurahList: React.FC<SurahListProps> = ({ surahs }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {surahs.map(surah => (
        <SurahCard key={surah.number} surah={surah} />
      ))}
    </div>
  );
};

export default SurahList;
