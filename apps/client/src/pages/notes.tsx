import { Separator } from 'react-aria-components';
import { Link } from 'wouter';
import { Note } from './notes/[id]';

const notes: Note[] = [
  {
    id: '1',
    title: 'Boof',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel dignissim augue. Pellentesque eget semper eros. Praesent turpis risus, commodo quis magna vitae, pellentesque luctus felis. Fusce ante neque, faucibus a nisi non, finibus egestas turpis. Sed sagittis porttitor lobortis. Phasellus id turpis sit amet odio viverra maximus iaculis sit amet sapien. Phasellus vestibulum eros in libero porttitor maximus. Nullam dictum maximus ornare. Nulla quis vulputate turpis, eu volutpat nunc. Aenean sollicitudin magna orci, iaculis mollis enim convallis nec. Cras auctor nibh at scelerisque rhoncus. Donec vitae luctus lorem.\n\nPhasellus at pharetra ligula. In lobortis urna ut nulla ornare, ac mattis dolor blandit. Mauris sit amet dui vitae diam vulputate pellentesque. Aenean pulvinar odio dolor, in bibendum magna aliquam quis. Praesent malesuada massa sed lorem venenatis consequat. Etiam lacinia odio ligula, vitae ornare orci egestas eu. Morbi commodo sem sed erat rhoncus aliquet. Curabitur sem eros, fringilla vel molestie id, lacinia vel elit. Curabitur tristique, nulla faucibus laoreet auctor, massa odio fermentum nisl, sed finibus justo justo eget nisi. Nulla sed erat sodales, ornare erat et, vestibulum justo. Curabitur sed augue faucibus, tristique est rutrum, blandit libero. Aliquam vulputate purus eu dictum laoreet. In malesuada nisl tempor justo mollis, quis posuere eros viverra.',
  },
  {
    id: '2',
    title: 'Boof',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel dignissim augue. Pellentesque eget semper eros. Praesent turpis risus, commodo quis magna vitae, pellentesque luctus felis. Fusce ante neque, faucibus a nisi non, finibus egestas turpis. Sed sagittis porttitor lobortis. Phasellus id turpis sit amet odio viverra maximus iaculis sit amet sapien. Phasellus vestibulum eros in libero porttitor maximus. Nullam dictum maximus ornare. Nulla quis vulputate turpis, eu volutpat nunc. Aenean sollicitudin magna orci, iaculis mollis enim convallis nec. Cras auctor nibh at scelerisque rhoncus. Donec vitae luctus lorem.\n\nPhasellus at pharetra ligula. In lobortis urna ut nulla ornare, ac mattis dolor blandit. Mauris sit amet dui vitae diam vulputate pellentesque. Aenean pulvinar odio dolor, in bibendum magna aliquam quis. Praesent malesuada massa sed lorem venenatis consequat. Etiam lacinia odio ligula, vitae ornare orci egestas eu. Morbi commodo sem sed erat rhoncus aliquet. Curabitur sem eros, fringilla vel molestie id, lacinia vel elit. Curabitur tristique, nulla faucibus laoreet auctor, massa odio fermentum nisl, sed finibus justo justo eget nisi. Nulla sed erat sodales, ornare erat et, vestibulum justo. Curabitur sed augue faucibus, tristique est rutrum, blandit libero. Aliquam vulputate purus eu dictum laoreet. In malesuada nisl tempor justo mollis, quis posuere eros viverra.',
  },
  {
    id: '2',
    title: 'Boof',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel dignissim augue. Pellentesque eget semper eros. Praesent turpis risus, commodo quis magna vitae, pellentesque luctus felis. Fusce ante neque, faucibus a nisi non, finibus egestas turpis. Sed sagittis porttitor lobortis. Phasellus id turpis sit amet odio viverra maximus iaculis sit amet sapien. Phasellus vestibulum eros in libero porttitor maximus. Nullam dictum maximus ornare. Nulla quis vulputate turpis, eu volutpat nunc. Aenean sollicitudin magna orci, iaculis mollis enim convallis nec. Cras auctor nibh at scelerisque rhoncus. Donec vitae luctus lorem.\n\nPhasellus at pharetra ligula. In lobortis urna ut nulla ornare, ac mattis dolor blandit. Mauris sit amet dui vitae diam vulputate pellentesque. Aenean pulvinar odio dolor, in bibendum magna aliquam quis. Praesent malesuada massa sed lorem venenatis consequat. Etiam lacinia odio ligula, vitae ornare orci egestas eu. Morbi commodo sem sed erat rhoncus aliquet. Curabitur sem eros, fringilla vel molestie id, lacinia vel elit. Curabitur tristique, nulla faucibus laoreet auctor, massa odio fermentum nisl, sed finibus justo justo eget nisi. Nulla sed erat sodales, ornare erat et, vestibulum justo. Curabitur sed augue faucibus, tristique est rutrum, blandit libero. Aliquam vulputate purus eu dictum laoreet. In malesuada nisl tempor justo mollis, quis posuere eros viverra.',
  },
  {
    id: '2',
    title: 'Boof',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel dignissim augue. Pellentesque eget semper eros. Praesent turpis risus, commodo quis magna vitae, pellentesque luctus felis. Fusce ante neque, faucibus a nisi non, finibus egestas turpis. Sed sagittis porttitor lobortis. Phasellus id turpis sit amet odio viverra maximus iaculis sit amet sapien. Phasellus vestibulum eros in libero porttitor maximus. Nullam dictum maximus ornare. Nulla quis vulputate turpis, eu volutpat nunc. Aenean sollicitudin magna orci, iaculis mollis enim convallis nec. Cras auctor nibh at scelerisque rhoncus. Donec vitae luctus lorem.\n\nPhasellus at pharetra ligula. In lobortis urna ut nulla ornare, ac mattis dolor blandit. Mauris sit amet dui vitae diam vulputate pellentesque. Aenean pulvinar odio dolor, in bibendum magna aliquam quis. Praesent malesuada massa sed lorem venenatis consequat. Etiam lacinia odio ligula, vitae ornare orci egestas eu. Morbi commodo sem sed erat rhoncus aliquet. Curabitur sem eros, fringilla vel molestie id, lacinia vel elit. Curabitur tristique, nulla faucibus laoreet auctor, massa odio fermentum nisl, sed finibus justo justo eget nisi. Nulla sed erat sodales, ornare erat et, vestibulum justo. Curabitur sed augue faucibus, tristique est rutrum, blandit libero. Aliquam vulputate purus eu dictum laoreet. In malesuada nisl tempor justo mollis, quis posuere eros viverra.',
  },
  {
    id: '2',
    title: 'Boof',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel dignissim augue. Pellentesque eget semper eros. Praesent turpis risus, commodo quis magna vitae, pellentesque luctus felis. Fusce ante neque, faucibus a nisi non, finibus egestas turpis. Sed sagittis porttitor lobortis. Phasellus id turpis sit amet odio viverra maximus iaculis sit amet sapien. Phasellus vestibulum eros in libero porttitor maximus. Nullam dictum maximus ornare. Nulla quis vulputate turpis, eu volutpat nunc. Aenean sollicitudin magna orci, iaculis mollis enim convallis nec. Cras auctor nibh at scelerisque rhoncus. Donec vitae luctus lorem.\n\nPhasellus at pharetra ligula. In lobortis urna ut nulla ornare, ac mattis dolor blandit. Mauris sit amet dui vitae diam vulputate pellentesque. Aenean pulvinar odio dolor, in bibendum magna aliquam quis. Praesent malesuada massa sed lorem venenatis consequat. Etiam lacinia odio ligula, vitae ornare orci egestas eu. Morbi commodo sem sed erat rhoncus aliquet. Curabitur sem eros, fringilla vel molestie id, lacinia vel elit. Curabitur tristique, nulla faucibus laoreet auctor, massa odio fermentum nisl, sed finibus justo justo eget nisi. Nulla sed erat sodales, ornare erat et, vestibulum justo. Curabitur sed augue faucibus, tristique est rutrum, blandit libero. Aliquam vulputate purus eu dictum laoreet. In malesuada nisl tempor justo mollis, quis posuere eros viverra.',
  },
  {
    id: '2',
    title: 'Boof',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel dignissim augue. Pellentesque eget semper eros. Praesent turpis risus, commodo quis magna vitae, pellentesque luctus felis. Fusce ante neque, faucibus a nisi non, finibus egestas turpis. Sed sagittis porttitor lobortis. Phasellus id turpis sit amet odio viverra maximus iaculis sit amet sapien. Phasellus vestibulum eros in libero porttitor maximus. Nullam dictum maximus ornare. Nulla quis vulputate turpis, eu volutpat nunc. Aenean sollicitudin magna orci, iaculis mollis enim convallis nec. Cras auctor nibh at scelerisque rhoncus. Donec vitae luctus lorem.\n\nPhasellus at pharetra ligula. In lobortis urna ut nulla ornare, ac mattis dolor blandit. Mauris sit amet dui vitae diam vulputate pellentesque. Aenean pulvinar odio dolor, in bibendum magna aliquam quis. Praesent malesuada massa sed lorem venenatis consequat. Etiam lacinia odio ligula, vitae ornare orci egestas eu. Morbi commodo sem sed erat rhoncus aliquet. Curabitur sem eros, fringilla vel molestie id, lacinia vel elit. Curabitur tristique, nulla faucibus laoreet auctor, massa odio fermentum nisl, sed finibus justo justo eget nisi. Nulla sed erat sodales, ornare erat et, vestibulum justo. Curabitur sed augue faucibus, tristique est rutrum, blandit libero. Aliquam vulputate purus eu dictum laoreet. In malesuada nisl tempor justo mollis, quis posuere eros viverra.',
  },
];

const Notes: React.FC = () => {
  return (
    <div className="flex flex-col gap-4">
      {notes.map((note) => (
        <Link
          key={note.id}
          href={`/notes/${note.id}`}
          className="flex flex-col gap-2 rounded-lg bg-neutral-300 p-4 text-blue-950"
        >
          <div className="text-lg font-bold">{note.title}</div>
          <Separator className="text-neutral-400" />
          <div className="line-clamp-4 text-blue-950">{note.body}</div>
        </Link>
      ))}
    </div>
  );
};

export default Notes;
