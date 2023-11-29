import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Icon } from '~/components';
import { setTag } from '~/reducer/filter';
import { NotesService, TagsService } from '~/services';
import { RootState } from '~/store';
import { TagType } from '~/types/note';
import { CreateTag } from './CreateTag';
import { NavItem, NavLabel, NavList, Wrapper } from './styles';

export function Filter() {
  const [open, setOpen] = useState(false);

  const { tag: tagFilter } = useSelector((state: RootState) => state.filter);
  const dispatch = useDispatch();

  const Notes = NotesService.getInstance();
  const Tags = TagsService.getInstance();
  const { data: tags, isLoading } = Tags.get();

  const handleSelect = (tag: TagType) => {
    dispatch(setTag(tag));
  };

  const handleSelectAll = () => {
    dispatch(setTag(null));
  };

  const handleOpen = () => {
    if (open) Notes.refetchNotes();

    setOpen(!open);
  };

  if (isLoading) return <></>;

  return (
    <Wrapper>
      <NavList>
        <NavItem $selected={!tagFilter} onClick={handleSelectAll}>
          <Icon name='logo' size='14px' />
          <NavLabel>Anotações</NavLabel>
        </NavItem>
        {tags?.length ? (
          tags.map((tag, index) => (
            <NavItem
              key={index}
              $selected={tagFilter?.value === tag.value}
              onClick={() => handleSelect(tag)}
            >
              <Icon name='tag' size='14px' />
              <NavLabel>{tag.label}</NavLabel>
            </NavItem>
          ))
        ) : (
          <></>
        )}
        <NavItem $selected={false} onClick={handleOpen}>
          <Icon name='edit' size='14px' />
          <NavLabel>Editar marcadores</NavLabel>
        </NavItem>
      </NavList>

      <CreateTag open={open} onClose={handleOpen} />
    </Wrapper>
  );
}
