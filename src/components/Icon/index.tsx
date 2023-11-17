import { FaEdit } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';
import { LuPalette } from 'react-icons/lu';
import { PiNotepad } from 'react-icons/pi';
import { TbSunMoon, TbTrash } from 'react-icons/tb';
import { Wrapper } from './styles';

interface IconProps {
  name: keyof typeof config;
  size?: string;
  onClick?: () => void;
}

export const config = {
  logo: <PiNotepad size='100%' color='' />,
  search: <FiSearch size='100%' />,
  edit: <FaEdit size='100%' />,
  remove: <TbTrash size='100%' />,
  themeMode: <TbSunMoon size='100%' />,
  palette: <LuPalette size='100%' />,
};

export function Icon({ name, size = '16px', onClick }: IconProps) {
  return (
    <Wrapper $size={size} onClick={onClick} $hasClick={!!onClick}>
      {config[name]}
    </Wrapper>
  );
}