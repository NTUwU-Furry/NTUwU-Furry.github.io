export interface EventsItem {
  title: string
  date: string
  location: string
  preview: string
  image: string
  content?: string
  links?: Link[]
}

interface Link {
  href: string
  name: string
}
