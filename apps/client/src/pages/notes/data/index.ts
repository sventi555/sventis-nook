export const notes = Array.from({ length: 20 }, (_, i) => ({
  id: i.toString(),
  title: `Booga ${i}`,
  body: 'This is a note with content.\n\nIt is a really cool note that I am quite proud of.',
  preview:
    'This is a note with content.\n\nIt is a really cool note that I am quite proud of.',
  date: 1734298027589,
}));
