import { BadRequestException, Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { Car } from './interfaces/car.interface';
import { CreateCartDto } from './dto/create-car.dto';
import { UpdateCartDto } from './dto/update-car.dto';

@Injectable()
export class CarsService {
     private cars: Car[] = [
          {
               id: uuid(),
               brand: "Toyota",
               model: 'Corolla'
          },
          {
               id: uuid(),
               brand: "Honda",
               model: 'Civic'
          },
          {
               id: uuid(),
               brand: "Jeep",
               model: 'Cherokee'
          }
     ];

     public findAll() {
          return this.cars;
     }

     public create(createCartDto: CreateCartDto) {
          const newCart = {
               id: uuid(),
               ...createCartDto
          };

          this.cars.push(newCart);

          return this.cars;
     }

     public update(id: string, updateCartDto: UpdateCartDto) {
          let carDB: Car = this.findById(id);

          if (updateCartDto.id && updateCartDto.id !== id)
               throw new BadRequestException(`Car id not valid inside body`);

          this.cars = this.cars.map(car => {
               if (car.id === id) {
                    carDB = {
                         ...car,
                         ...updateCartDto,
                         id
                    }

                    return carDB;
               }
               return car;
          })

          this.cars;

     }

     public delete(id: string) {
          let carDB: Car = this.findById(id);

          this.cars = this.cars.filter(car=>car.id !== carDB.id);

          return this.cars;

     }

     public findById(id: string) {
          const carsnew = this.cars.find(e => e.id === id);

          if(carsnew === null) throw new BadRequestException("not found")

          return carsnew;

     }


}
