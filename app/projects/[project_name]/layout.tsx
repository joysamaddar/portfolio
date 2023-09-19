import type { Metadata } from "next";

interface MetadataProps{
  params: { project_name: string };
};

export async function generateMetadata({ params }: MetadataProps): Promise<Metadata> {
  const project_name = params.project_name;
  return {
    title: `Joy's Portfolio - ${project_name}`,
    description: "Making pixel-perfect UIs and robust backends.",
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="max-w-screen overflow-clip">{children}</main>;
}
