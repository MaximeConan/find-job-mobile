export interface IJob {
  id: string
  title: string
  description: string
  slug: string
  company: {
    id: string
    name: string
    slug: string
  }
}

export interface IFullJob extends IJob {
  tags: ITag[]
}

export interface ITag {
  id: string
  name: string
  slug: string
}
