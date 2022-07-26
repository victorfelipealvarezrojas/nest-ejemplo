import {
    IsOptional,
    IsString,
    IsUUID,
    MinLength
} from "class-validator";

export class UpdateCartDto {

    @IsString()
    @IsUUID()
    @IsOptional()
    readonly id?: string;

    @IsString({ message: `The brand is required` })
    @IsOptional()
    readonly brand?: string;

    @IsString()
    @MinLength(3)
    @IsOptional()
    readonly model?: string;
}