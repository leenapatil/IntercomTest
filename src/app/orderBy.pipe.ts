import { Pipe, PipeTransform } from '@angular/core';
@Pipe({  name: 'orderby' })
export class OrderByPipe implements PipeTransform {
    transform(customers: any): any {
        customers.sort((a: any, b: any) =>
          a.user_id - b.user_id   
        );
        return customers;
    }
}