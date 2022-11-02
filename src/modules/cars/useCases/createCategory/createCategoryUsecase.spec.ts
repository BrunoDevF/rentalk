import { CreateCategoryUseCase } from "./createCategoryUseCase"
import { CategoriesRepositoryInMemory } from './../../repositories/in-memory/CategoriesRepositoryInMemory';
import { AppError } from "../../../../errors/AppError";

let createCategoryUseCase: CreateCategoryUseCase;
let categoriesRepositoryInMemory: CategoriesRepositoryInMemory;

describe('Create category', () => {
    beforeEach(() => {
        categoriesRepositoryInMemory = new CategoriesRepositoryInMemory();
        createCategoryUseCase = new CreateCategoryUseCase(categoriesRepositoryInMemory);
    })
    it("should be able to create a new category", async () => {
        const category = {
            name: "Test category",
            description: "This is a test category"
        }
        await createCategoryUseCase.execute(category);

        const categoryCreated = await categoriesRepositoryInMemory.findByName(category.name);
        expect(categoryCreated).toHaveProperty("id");
    })

    it("should not be able to create a new category with name exist", async () => {
        expect(async () => {
            const category = {
                name: "Test category",
                description: "This is a test category"
            }
            await createCategoryUseCase.execute(category);
            await createCategoryUseCase.execute(category);
        }).rejects.toBeInstanceOf(AppError);

    })
})