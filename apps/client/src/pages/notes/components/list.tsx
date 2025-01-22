import { useQuery } from '@tanstack/react-query';
import clsx from 'clsx';
import { CSSProperties, Fragment, useEffect } from 'react';
import { ListBox, ListBoxItem, Text } from 'react-aria-components';
import { navbarHeight } from '../../../shared/navbar/constants';
import { sidebarSlideDuration, sidebarWidth } from '../constants';
import { notes } from '../data';

interface NoteListProps {
  sidebarOpen: boolean;
  sidebarAnimating: boolean;
  overlayOpen: boolean;
  selectedNoteId: string | undefined;
  onClickNote: (noteId: string) => void;
}

const NoteList: React.FC<NoteListProps> = ({
  sidebarOpen,
  sidebarAnimating,
  overlayOpen,
  selectedNoteId,
  onClickNote,
}) => {
  const { data: notePreviews } = useQuery({
    queryKey: [],
    queryFn: () => {
      return notes;
    },
  });

  useEffect(() => {
    if (!selectedNoteId && notePreviews) {
      onClickNote(notePreviews[0].id);
    }
  }, [notePreviews, selectedNoteId, onClickNote]);

  return (
    <div
      style={
        {
          '--sidebar-width': sidebarWidth,
          '--slide-duration': sidebarSlideDuration,
          '--navbar-height': navbarHeight,
        } as CSSProperties
      }
      className={clsx(
        'absolute top-0 z-10 h-[calc(100vh-var(--navbar-height))] w-full overflow-y-auto p-3 scrollbar-thin scrollbar-track-background scrollbar-thumb-text-sub sm:w-[--sidebar-width] sm:border-r sm:border-separator',
        {
          'sm:visible': sidebarOpen,
          'sm:invisible sm:-translate-x-[--sidebar-width]': !sidebarOpen,
          invisible: !overlayOpen,
          'sm:transition-[transform,visibility] sm:duration-[--slide-duration]':
            sidebarAnimating,
        },
      )}
    >
      <ListBox
        selectedKeys={selectedNoteId ? [selectedNoteId] : []}
        selectionMode="single"
        onSelectionChange={([noteId]) => {
          onClickNote((noteId ?? selectedNoteId) as string);
        }}
        aria-label="Note selector"
      >
        {/* TODO: loading UI */}
        {notePreviews?.map((note) => {
          const isSelected = note.id === selectedNoteId;
          return (
            <Fragment key={note.id}>
              <ListBoxItem
                id={note.id}
                className={clsx('group cursor-pointer border-l-2 px-2', {
                  'border-selection': isSelected,
                  'border-transparent': !isSelected,
                })}
                textValue={note.title}
              >
                <div className="flex flex-col gap-1 border-b border-b-separator py-3 group-last:border-b-0">
                  <Text
                    slot="label"
                    className={clsx({
                      'text-selection': isSelected,
                    })}
                  >
                    {note.title}
                  </Text>
                  <Text
                    slot="description"
                    className="overflow-hidden text-ellipsis whitespace-nowrap text-nowrap text-sm font-light text-text-sub"
                  >
                    <span className="text-text">
                      {new Date(note.date).toLocaleDateString()}:
                    </span>{' '}
                    <span>{note.preview}</span>
                  </Text>
                </div>
              </ListBoxItem>
            </Fragment>
          );
        })}
      </ListBox>
    </div>
  );
};

export default NoteList;
