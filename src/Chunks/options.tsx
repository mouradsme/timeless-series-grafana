import { gradient } from '../Charts/All'

export function Options(options : any) : any {
    const bgColors        : string = options.chartType == 0 ? [gradient("Line")] : options.bgColors.split(',').map((value:any) => { return value.trim()})
    const borderColors    : string = options.borderColors.split(',').map((value : any)=> { return value.trim()})
    const Ignore          : string = options.Ignore.split(',').map((value:any) => { return value.trim()})
    return {
        bgColors,
        borderColors,
        Ignore
    }
}
export function Overrides(overrides : any) {
    const Overrides : any = {}
	overrides!?.forEach((item : any) => {
		let id = item.matcher.options
		let values = item.properties[0]!?.value[0]!
		Overrides[id.toLowerCase().trim()] = values
	})
    return Overrides;
}