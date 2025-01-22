import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useQuery } from '@tanstack/react-query';
import clsx from 'clsx';
import { CSSProperties } from 'react';
import { Button } from 'react-aria-components';
import PageContainer from '../../../shared/components/page-container';
import { sidebarSlideDuration, sidebarWidth } from '../constants';
import { notes } from '../data';

interface NoteDetailProps {
  sidebarOpen: boolean;
  toggleSidebarOpen: () => void;
  sidebarAnimating: boolean;
  overlayOpen: boolean;
  openOverlay: () => void;
  selectedNoteId: string | undefined;
}

const NoteDetail: React.FC<NoteDetailProps> = ({
  sidebarOpen,
  toggleSidebarOpen,
  sidebarAnimating,
  overlayOpen,
  openOverlay,
  selectedNoteId,
}) => {
  const { data: selectedNote } = useQuery({
    queryKey: [selectedNoteId],
    queryFn: () => {
      return notes.find((note) => note.id === selectedNoteId);
    },
    enabled: selectedNoteId != null,
  });

  return (
    <div
      style={
        {
          '--sidebar-width': sidebarWidth,
          '--sidebar-duration': sidebarSlideDuration,
        } as CSSProperties
      }
      className={clsx('relative sm:block', { hidden: overlayOpen })}
    >
      <Button
        className={clsx(
          'absolute left-4 top-4 flex h-fit rounded-md text-sm hover:text-selection',
          {
            'sm:ml-[--sidebar-width]': sidebarOpen,
            'sm:transition-[margin] sm:duration-[--sidebar-duration]':
              sidebarAnimating,
          },
        )}
        onPress={() => {
          toggleSidebarOpen();
          openOverlay();
        }}
      >
        <FontAwesomeIcon className="size-6" icon={faBars} />
      </Button>
      {/* TODO: loading UI */}
      {selectedNote && (
        <PageContainer>
          <div
            className={clsx('mt-6 flex flex-col gap-2', {
              'sm:ml-[--sidebar-width]': sidebarOpen,
              'sm:transition-[margin] sm:duration-[--sidebar-duration]':
                sidebarAnimating,
            })}
          >
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
