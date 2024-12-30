import React from 'react';
import { Verse } from '../../types';

interface VerseCardProps {
  verse: Verse;
}

const VerseCard: React.FC<VerseCardProps> = ({ verse }) => {
  return (
    <div className="max-w-xl bg-gray-800 border border-gray-700 rounded-lg shadow-md hover:shadow-lg transition-transform duration-300 transform mb-1">
      <div className="p-6">
        <p className="text-2xl font-semibold text-gray-100 mb-4">{verse.text.arab}</p>
        <p className="text-gray-400">{verse.translation.id}</p>
        <audio controls src={verse.audio.primary} className="mt-4 w-full rounded-lg" />
      </div>
    </div>
  );
};

export default VerseCard;

