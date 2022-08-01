import { Module } from '@nestjs/common';
import { CarsController } from './cars.controller';
import { CarsService } from './cars.service';

@Module({
  controllers: [CarsController],
  providers: [CarsService], //Todos los  servicios son providers
  exports: [CarsService] //si no lo exporto no se puede usar fuera
})
export class CarsModule { }
