interface Props {
  title: string;
  content: string;
  commentsQty: number;
  tags: string[];
  // 8 - Enums
  category: Category;
}

export const Category = {
  JS: "JavaScript",
  TS: "TypeScript",
  REACT: "React",
} as const;
export type Category = (typeof Category)[keyof typeof Category];

const Destructuring = ({
  title,
  content,
  commentsQty,
  tags,
  category,
}: Props) => {
  return (
    <div>
      <h2>Destructuring component</h2>
      <h3>{title}</h3>
      <p>{content}</p>
      <p>Quantidade de comentários: {commentsQty}</p>
      <div>
        {tags.map((tag, index) => (
          <span key={index}>#{tag} </span>
        ))}
      </div>
      <p>Categoria: {category}</p>
      <hr />
    </div>
  );
};

export default Destructuring;
