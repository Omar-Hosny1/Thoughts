import type { ExtendedaUser } from './user';

interface IThought {
  id: string;
  userId: string | ExtendedaUser;
  looks: number;
  reposts: number;
  isApproved: boolean;
  approvedDate: Date | null;
  thoughtContent: string;
  tags: Array<string>;
  publishedDate: Date;
  createdDate: Date;
}

export default IThought;
