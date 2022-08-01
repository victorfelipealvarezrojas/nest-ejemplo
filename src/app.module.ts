import { Module } from '@nestjs/common';
import { CarsModule } from './cars/cars.module';
import { BrandsModule } from './brands/brands.module';
import { SeedModule } from './seed/seed.module';


/**
 * Module:
    Agrupan y desacoplan un conjunto de funcionalidad
    específica por dominio.

   app.module:
    Modulo principal root de mi app que tendra la defincion de todos los modulos que usare
 */

@Module({
  imports: [CarsModule, BrandsModule, SeedModule],
  controllers: [],
  providers: [],
  exports: [],
})

export class AppModule { }
