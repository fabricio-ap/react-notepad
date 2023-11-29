export type NoteType = {
  id: string;
  title: string;
  content: string;
  fixed?: boolean;
  tag: TagType | null;
};

export type TagType = {
  id?: string | number;
  label: string;
  value: string;
};
