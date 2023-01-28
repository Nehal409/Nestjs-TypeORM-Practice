import { PartialType } from '@nestjs/mapped-types';
import { CreateContactInfoDto } from './create-contactInfo.dto';


export class UpdateContactInfoDto extends PartialType(CreateContactInfoDto) {}