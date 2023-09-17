export default function Page({ params }: { params: { link: string } }) {
  return <div>My Post: {params.link}</div>
}