import { FaEdit } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';
import { PiNotepad } from 'react-icons/pi';
import { TbTrash } from 'react-icons/tb';
import { Wrapper } from './styles';

interface IconProps {
  name: keyof typeof config;
  size?: string;
}

const config = {
  logo: <PiNotepad size='100%' />,
  search: <FiSearch size='100%' />,
  edit: <FaEdit />,
  remove: <TbTrash />,
};

export function Icon({ name, size = '16px' }: IconProps) {
  return <Wrapper $size={size}>{config[name]}</Wrapper>;
}
