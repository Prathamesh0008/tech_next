import BlogAdminClient from "./BlogAdminClient";

export const metadata = {
  title: "Blog Admin | Nova Techsciences",
  robots: { index: false, follow: false },
};

export default function BlogAdminPage() {
  return <BlogAdminClient />;
}
