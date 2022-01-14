import { Request, Response } from 'express';
import { ImportCategoryUseCase } from './importCategoryUseCase';

class ImportCategoryController {
  constructor(private importCategoryUseCase: ImportCategoryUseCase) {}

  async handle(request: Request, response: Response) {
    const { file } = request;

   await this.importCategoryUseCase.execute(file)

    return response.send();
  }
}

export { ImportCategoryController };
