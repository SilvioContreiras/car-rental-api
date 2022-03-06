import { inject, injectable } from "tsyringe";
import { SpecificationRepository } from '../../repositories/implementations/SpecificationRepository';

interface IRequest {
  name: string;
  description: string;
}
@injectable()
class CreateSpecificationUseCase {
  constructor(
    @inject("SpecificationRepository")
    private specificationRepository: SpecificationRepository
    ) {}

  execute({ name, description }: IRequest) {
    const specificationAlreadyExists =
      this.specificationRepository.findSpecificationByName(name);

    if (specificationAlreadyExists) {
      throw new Error('Specification already exists');
    }

    this.specificationRepository.create({
      name,
      description
    });
  }
}

export { CreateSpecificationUseCase };
