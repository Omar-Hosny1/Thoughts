interface IThought {
  id: string;
  userId: string;
  isAdmin: boolean;
  looks: number;
  reposts: number;
  isApproved: boolean;
  approvedDate: Date | null;
  thoughtTitle: string;
  thoughtBody: string;
  tags: Array<string>;
  publishedDate: Date;
  createdDate: Date;
}

export default IThought;
