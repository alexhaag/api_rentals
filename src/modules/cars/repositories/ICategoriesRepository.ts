import { Category } from "../model/Category";

interface ICreateCategoriesDTO {
  name: string;
  description: string;
}

interface ICategoriesRepository {
  create({ description, name }: ICreateCategoriesDTO): void;
  list(): Category[];
  findByName(name: string): Category;
}

export { ICategoriesRepository, ICreateCategoriesDTO };
