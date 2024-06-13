import { Type } from "class-transformer";
import { IsNumber, IsPositive, IsString, MinLength } from "class-validator";

export class CreateProductDto {

  @IsString()
  @MinLength(2)
  public name:string;

  @IsNumber({
    maxDecimalPlaces: 4,
  })
  @IsPositive()
  @Type( () => Number ) // lo pasa a un Number
  public price:number;

}
