import { Injectable } from '@nestjs/common';
import { BrandsService } from 'src/brands/brands.service';
import { CarsService } from 'src/cars/cars.service';
import { BRAND_SEED } from './data/brand.seed';
import { CARS_SEED } from './data/cars.seed';

@Injectable()
export class SeedService {

  constructor(
    private readonly carsService: CarsService,
    private readonly brandService: BrandsService
  ) { }

  public populateDB() {

    this.carsService.fillCarsWithSeedDate(CARS_SEED);
    this.brandService.fillCarsWithSeedDate(BRAND_SEED);

    return 'Seed executed';
  }
}
