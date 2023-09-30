import type { Metadata } from "next";

interface MetadataProps{
  params: { project_name: string };
};

export async function generateMetadata({ params }: MetadataProps): Promise<Metadata> {
  const project_name = params.project_name.slice(0,1).toUpperCase()+params.project_name.slice(1).replaceAll("_", " ");
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
  return <main className="overflow-clip container">{children}</main>;
}
