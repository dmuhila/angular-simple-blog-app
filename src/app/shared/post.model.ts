export class Post {
  constructor(
    public title: string,
    public categories: string,
    public content: string,
    public id?: number
  ) {}
}
