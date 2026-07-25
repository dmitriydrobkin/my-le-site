import { getCategoriesAction } from '@/server/actions/categories';
import CategoryManager from './CategoryManager';
import { verifyAdminSession } from '@/server/actions/auth';

export const runtime = 'edge';

export default async function CategoriesPage() {
  await verifyAdminSession();
  const categories = await getCategoriesAction();

  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-3xl font-display font-bold text-ink mb-8">Управление категориями</h1>
      <CategoryManager initialCategories={categories} />
    </div>
  );
}
