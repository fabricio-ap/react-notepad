import { useQuery } from 'react-query';
import { TagType } from '~/types/note';
import { getTags } from './service';

export class TagsService {
  private static instance: TagsService;
  private refetch: () => void = () => undefined;

  private constructor() {}

  public static getInstance(): TagsService {
    if (!TagsService.instance) {
      TagsService.instance = new TagsService();
    }

    return TagsService.instance;
  }

  public get() {
    const { refetch, ...query } = useQuery<TagType[]>({
      queryKey: 'tags',
      queryFn: () => getTags(),
    });

    this.refetch = refetch;

    return { ...query, refetch };
  }

  private refetchTags() {
    this.refetch();
  }
}
