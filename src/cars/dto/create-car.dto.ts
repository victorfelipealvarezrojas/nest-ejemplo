import { IsString, MinLength } from "class-validator";

export class CreateCartDto {
     @IsString({message:`The brand is required`})
     readonly brand:string;

     @IsString()
     @MinLength(3)
     readonly model:string;
 }