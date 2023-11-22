import { useDispatch, useSelector } from 'react-redux';
import { Icon } from '~/components';
import { setTag } from '~/reducer/filter';
import { TagsService } from '~/services';
import { RootState } from '~/store';
import { TagType } from '~/types/note';
import { NavItem, NavList, Wrapper } from './styles';

export function Filter() {
  const { tag: tagFilter } = useSelector((state: RootState) => state.filter);
  const dispatch = useDispatch();

  const Tags = TagsService.getInstance();
  const { data: tags, isLoading } = Tags.get();

  const handleSelect = (tag: TagType) => {
    dispatch(setTag(tag));
  };

  const handleSelectAll = () => {
    dispatch(setTag(null));
  };

  if (isLoading) return <></>;

  return (
    <Wrapper>
      <NavList>
        <NavItem $selected={!tagFilter} onClick={handleSelectAll}>
          <Icon name='logo' size='14px' />
          Anotações
        </NavItem>
        {tags?.length ? (
          tags.map((tag, index) => (
            <NavItem
              key={index}
              $selected={tagFilter?.value === tag.value}
              onClick={() => handleSelect(tag)}
            >
              <Icon name='tag' size='14px' />
              {tag.label}
            </NavItem>
          ))
        ) : (
          <></>
        )}
      </NavList>
    </Wrapper>
  );
}
