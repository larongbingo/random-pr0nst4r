import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  Inject,
} from "@nestjs/common";

import { ValidGendersProviderKey } from "../constants/valid.genders";

@Injectable()
export class ValidGenderPipe implements PipeTransform {
  constructor(
    @Inject(ValidGendersProviderKey) private readonly validGenders: string[],
  ) {}

  public transform(value: any, metadata: ArgumentMetadata) {
    if (!this.validGenders.includes(value)) {
      return undefined;
    }
    return value;
  }
}
