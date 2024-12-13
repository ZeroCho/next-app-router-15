type Props = { pageParam?: number };
export async function getPostRecommends({pageParam} : Props) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/posts/recommends?cursor=${pageParam}`, {
    next: {
      tags: ['posts', 'recommends']
    },
    cache: 'force-cache',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json();
}