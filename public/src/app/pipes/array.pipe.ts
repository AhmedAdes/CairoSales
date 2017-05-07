import { Injectable, Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "filter",
    pure: false
})
@Injectable()
export class ArrayFilterPipe implements PipeTransform {

    transform(items: any[], conditions: { [field: string]: any }): any[] {
        if (!items) { return; }
        return items.filter(item => {
            for (let field in conditions) {
                if ((typeof item[field] === 'string' || item[field] instanceof String) &&
                    (item[field].toLowerCase().indexOf(conditions[field].toLowerCase()) == -1)) {
                    return false;
                }
            }
            return true;
        });
    }
}


@Pipe({
    name: "orderby",
    pure: false
})
@Injectable()
export class ArrayOrderByPipe implements PipeTransform {

    transform(items: any[], orderFields: string): any[] {
        if (!orderFields) { return items; }
        if (!items) { return; }
        orderFields.split(';').forEach(function (currentField) {
            var orderType = 'ASC';

            if (currentField[0] === '-') {
                orderType = 'DESC';
            }
            currentField = currentField.substring(1);

            items.sort(function (a, b) {
                if (orderType === 'ASC') {
                    if (a[currentField] < b[currentField]) return -1;
                    if (a[currentField] > b[currentField]) return 1;
                    return 0;
                } else {
                    if (a[currentField] < b[currentField]) return 1;
                    if (a[currentField] > b[currentField]) return -1;
                    return 0;
                }
            });
        });
        return items;
    }
}