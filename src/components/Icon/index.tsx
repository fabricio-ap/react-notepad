import { FiSearch } from 'react-icons/fi';
import { IoIosAdd } from 'react-icons/io';
import { LuPalette } from 'react-icons/lu';
import { MdOutlineEdit, MdOutlinePushPin } from 'react-icons/md';
import { PiNotepad, PiTagSimpleBold } from 'react-icons/pi';
import { TbSunMoon, TbTrash } from 'react-icons/tb';
import { Wrapper } from './styles';

interface IconProps {
  name: keyof typeof config;
  size?: string;
  onClick?: () => void;
}

export const config = {
  logo: <PiNotepad size='100%' />,
  search: <FiSearch size='100%' />,
  edit: <MdOutlineEdit size='100%' />,
  remove: <TbTrash size='100%' />,
  themeMode: <TbSunMoon size='100%' />,
  palette: <LuPalette size='100%' />,
  pin: <MdOutlinePushPin size='100%' />,
  tag: <PiTagSimpleBold size='100%' />,
  add: <IoIosAdd size='100%' />,
};

export function Icon({ name, size = '16px', onClick }: IconProps) {
  return (
    <Wrapper $size={size} onClick={onClick} $hasClick={!!onClick} data-testid='icon'>
      {config[name]}
    </Wrapper>
  );
}
