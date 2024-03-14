// import { Pipe, PipeTransform } from '@angular/core';

// @Pipe({
//   name: 'filter'
// })
// export class FilterPipe implements PipeTransform {

//   transform(items: any[], searchText: string): any[] {
//     return [];
//   }

// }
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'appFilter' })
export class FilterPipe implements PipeTransform {
 
  transform(items: any[], searchText: string): any[] {
    

    return items.filter(item => {
      return (
        item.name.toLowerCase().includes(searchText) ||
        item.id.toString().toLowerCase().includes(searchText) ||
        item.image_path.toLowerCase().includes(searchText) ||
        item.description.toLowerCase().includes(searchText)
      );
    });
  }
}