import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'preceedStringWithSlash'
})

export class PreceedStringWithSlashPipe implements PipeTransform {
    /**
     * Add Slash symbol to the beginning of string
     * @param value Original Value
     * @returns '/value'
     */
    transform(value: string): string {
        return '/' + value;
    }
}