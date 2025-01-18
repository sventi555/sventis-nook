import { useQuery } from '@tanstack/react-query';
import clsx from 'clsx';
import { CSSProperties } from 'react';
import PageContainer from '../../../shared/components/page-container';
import { sidebarSlideDuration, sidebarWidth } from '../constants';
import { notes } from '../data';

interface NoteDetailProps {
  sidebarOpen: boolean;
  toggleSidebarOpen: () => void;
  sidebarAnimating: boolean;
  overlayOpen: boolean;
  setOverlayOpen: () => void;
  selectedNoteId: string | undefined;
}

const NoteDetail: React.FC<NoteDetailProps> = ({
  sidebarOpen,
  toggleSidebarOpen,
  sidebarAnimating,
  overlayOpen,
  setOverlayOpen,
  selectedNoteId,
}) => {
  const { data: selectedNote } = useQuery({
    queryKey: [selectedNoteId],
    queryFn: () => {
      return notes.find((note) => note.id === selectedNoteId);
    },
    enabled: selectedNoteId != null,
  });

  console.log(sidebarAnimating);

  return (
    <div className={clsx('sm:block', { hidden: overlayOpen })}>
      {/* TODO: loading UI */}
      {selectedNote && (
        <PageContainer>
          <div
            style={
              {
                '--sidebar-width': sidebarWidth,
                '--sidebar-duration': sidebarSlideDuration,
              } as CSSProperties
            }
            className={clsx('flex flex-col gap-2', {
              'sm:ml-[--sidebar-width]': sidebarOpen,
              'sm:transition-[margin] sm:duration-[--sidebar-duration]':
                sidebarAnimating,
            })}
          >
            <button className="hidden sm:block" onClick={toggleSidebarOpen}>
              toggle sidebar
            </button>
            <button className="sm:hidden" onClick={setOverlayOpen}>
              open overlay
            </button>
            <div className="flex justify-between">
              <h1 className="text-3xl">{selectedNote.title}</h1>
              <div className="font-light text-text-sub">
                {new Date(selectedNote.date).toLocaleDateString()}
              </div>
            </div>
            <div className="whitespace-pre-wrap">{selectedNote.body}</div>
          </div>
        </PageContainer>
      )}
    </div>
  );
};

export default NoteDetail;
