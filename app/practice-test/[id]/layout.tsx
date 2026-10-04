export function generateStaticParams() {
  const ids2026 = Array.from({ length: 10 }, (_, i) => ({ id: String(i + 1) }));
  const ids2024 = Array.from({ length: 10 }, (_, i) => ({ id: `2024-${i + 1}` }));
  const ids2023 = Array.from({ length: 10 }, (_, i) => ({ id: `2023-${i + 1}` }));
  return [...ids2026, ...ids2024, ...ids2023];
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
