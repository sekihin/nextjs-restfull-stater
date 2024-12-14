import { Categories } from '@prisma/client';
import { ProductEntity } from '../../products/entities/product.entity'
import { ApiProperty } from '@nestjs/swagger';

export class CategoryEntity implements Categories {
  @ApiProperty({ required: true })
  CategoryID: number = 0;

  @ApiProperty({ required: true })
  CategoryName: string = '';

  @ApiProperty({ required: false, nullable: true })
  Description: string | null = null;

  @ApiProperty({ required: false, type: () => [ProductEntity] })
  products?: ProductEntity[];
}
