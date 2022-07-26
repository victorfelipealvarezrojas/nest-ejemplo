import {
     Body,
     Controller,
     Delete,
     Get,
     NotFoundException,
     Param,
     ParseIntPipe,
     ParseUUIDPipe,
     Patch,
     Post,
     UsePipes,
     ValidationPipe
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCartDto } from './dto/create-car.dto';
import { UpdateCartDto } from './dto/update-car.dto';

@Controller('cars')
export class CarsController {

     constructor(private readonly carsService: CarsService) { }

     @Get()
     getAllCars() {
          return this.carsService.findAll();
     }

     //@Param('id', ParseIntPipe) id: string
     @Get(':id')
     getCarsById(@Param('id', ParseUUIDPipe) id: string) {
          const car = this.carsService.findById(id);

          if (!car)
               throw new NotFoundException(`Cart no encontrado ${id}`);

          return car;
     }

     @Post()
     CreateCar(@Body() createCartDto: CreateCartDto) {
          return this.carsService.create(createCartDto);

     }

     @Patch(':id')
     UpdateCar(
          @Body() updateCartDto: UpdateCartDto,
          @Param('id', ParseUUIDPipe) id: string
     ) {
          return this.carsService.update(id, updateCartDto)
     }

     @Delete(':id')
     DeleteCar(@Param('id',ParseUUIDPipe) id: string) {
          return this.carsService.delete(id)
     }
}
