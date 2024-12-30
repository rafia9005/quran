import SurahCard from '../elements/SurahCard';
import { Surah } from '../../types';

interface SurahListProps {
  surahs: Surah[];
}

const SurahList: React.FC<SurahListProps> = ({ surahs }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 bg-gray-800 border border-gray-700 rounded-lg shadow-md p-6">
      {surahs.map((surah) => (
        <SurahCard key={surah.number} surah={surah} />
      ))}
    </div>
  );
};

export default SurahList;

