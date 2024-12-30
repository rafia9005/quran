
import { useParams } from 'react-router-dom';
import { useFetchDetailSurah } from '../hooks/useFetchSurah';
import IndexLayout from '../components/layouts/IndexLayout';
import SurahDetail from '../components/fragments/SurahDetail';

export default function DetailSurah() {
  const { id } = useParams<{ id: string }>();
  const { data, error } = useFetchDetailSurah(id!);

  if (error) {
    return <p className="text-red-600 text-center mt-10">Error: {error}</p>;
  }

  if (!data) {
    return (
      <IndexLayout>
        <div className="flex justify-center items-center min-h-screen">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-gray-700 rounded-full animate-bounce"></div>
            <div className="w-4 h-4 bg-blue-600 rounded-full animate-bounce delay-200"></div>
            <div className="w-4 h-4 bg-blue-700 rounded-full animate-bounce delay-400"></div>
          </div>
        </div>
      </IndexLayout>
    );
  }

  return (
    <IndexLayout>
      <SurahDetail surah={data} />
    </IndexLayout>
  );
}

