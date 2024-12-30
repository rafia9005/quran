import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Index from '../pages/Index'
import DetailSurah from '../pages/DetailSurah'
export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/surah/:id" element={<DetailSurah />} />
      </Routes>
    </BrowserRouter>
  )
}

