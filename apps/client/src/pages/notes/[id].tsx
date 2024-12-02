import Breadcrumbs from '../../components/breadcrumbs';

export interface Note {
  id: string;
  title: string;
  body: string;
}

const note: Note = {
  id: '1',
  title: 'Boof',
  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel dignissim augue. Pellentesque eget semper eros. Praesent turpis risus, commodo quis magna vitae, pellentesque luctus felis. Fusce ante neque, faucibus a nisi non, finibus egestas turpis. Sed sagittis porttitor lobortis. Phasellus id turpis sit amet odio viverra maximus iaculis sit amet sapien. Phasellus vestibulum eros in libero porttitor maximus. Nullam dictum maximus ornare. Nulla quis vulputate turpis, eu volutpat nunc. Aenean sollicitudin magna orci, iaculis mollis enim convallis nec. Cras auctor nibh at scelerisque rhoncus. Donec vitae luctus lorem.\n\nPhasellus at pharetra ligula. In lobortis urna ut nulla ornare, ac mattis dolor blandit. Mauris sit amet dui vitae diam vulputate pellentesque. Aenean pulvinar odio dolor, in bibendum magna aliquam quis. Praesent malesuada massa sed lorem venenatis consequat. Etiam lacinia odio ligula, vitae ornare orci egestas eu. Morbi commodo sem sed erat rhoncus aliquet. Curabitur sem eros, fringilla vel molestie id, lacinia vel elit. Curabitur tristique, nulla faucibus laoreet auctor, massa odio fermentum nisl, sed finibus justo justo eget nisi. Nulla sed erat sodales, ornare erat et, vestibulum justo. Curabitur sed augue faucibus, tristique est rutrum, blandit libero. Aliquam vulputate purus eu dictum laoreet. In malesuada nisl tempor justo mollis, quis posuere eros viverra.',
};

const Note: React.FC = () => {
  return (
    <div>
      <Breadcrumbs
        links={[{ text: 'Notes', url: '/notes' }, { text: note.title }]}
      />
      <div className="flex flex-col gap-4">
        <div className="text-4xl font-semibold">{note.title}</div>
        <div>{note.body}</div>
      </div>
    </div>
  );
};

export default Note;
