import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'calculator'
})
export class CalculatorPipe implements PipeTransform{
    transform(value: any, value2: any){
        let operations = `
            Addition: ${value + value2} - 
            Subtraction: ${value - value2} - 
            Multiplication: ${value * value2} - 
            Division: ${value / value2}
        `;
        return operations;
    }
}