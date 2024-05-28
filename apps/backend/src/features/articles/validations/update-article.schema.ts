import { createArticleSchema } from 'src/features/articles/validations/create-article.schema';

export const updateArticleSchema = createArticleSchema.partial().refine(
  (data) => {
    const { category, conference, team } = data;
    return (
      (category === undefined && conference === undefined && team === undefined) ||
      (category !== undefined && conference !== undefined && team !== undefined)
    );
  },
  {
    message: 'If one of category, conference, or team is present, all others must be present too',
  },
);
