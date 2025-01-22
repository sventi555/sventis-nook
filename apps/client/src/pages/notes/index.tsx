import { useEffect, useState } from 'react';
import NoteDetail from './components/detail';
import NoteList from './components/list';
import { sidebarSlideMs } from './constants';

const Page: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [sidebarAnimating, setSidebarAnimating] = useState(false);
  const [overlayOpen, setOverlayOpen] = useState(false);
  const [selectedNoteId, setSelectedNoteId] = useState<string>();
  const [sidebarTimer, setSidebarTimer] = useState<number>();

  useEffect(() => {
    return () => {
      if (sidebarTimer) {
        clearTimeout(sidebarTimer);
      }
    };
  });

  return (
    <div className="relative">
      <NoteList
        sidebarOpen={sidebarOpen}
        sidebarAnimating={sidebarAnimating}
        overlayOpen={overlayOpen}
        selectedNoteId={selectedNoteId}
        onClickNote={(id) => {
          setSelectedNoteId(id);
          setOverlayOpen(false);
        }}
      />
      <NoteDetail
        sidebarOpen={sidebarOpen}
        toggleSidebarOpen={() => {
          setSidebarAnimating(true);
          setSidebarOpen(!sidebarOpen);
          setSidebarTimer(
            setTimeout(() => {
              setSidebarAnimating(false);
            }, sidebarSlideMs),
          );
        }}
        sidebarAnimating={sidebarAnimating}
        overlayOpen={overlayOpen}
        openOverlay={() => setOverlayOpen(true)}
        selectedNoteId={selectedNoteId}
      />
    </div>
  );
};

export default Page;
