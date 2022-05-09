export default function chartPlugins(options : any) {
    const CustomBackgrouns = {
        id: 'custom_canvas_background_color',
        beforeDraw: (chart: any) => {
        const ctx = chart.canvas.getContext('2d');
        ctx.save();
        ctx.globalCompositeOperation = 'destination-over';
        ctx.fillStyle = options.bgColor;
        ctx.fillRect(0, 0, chart.width, chart.height);
        ctx.restore()
        }
    }
    const Plugins = [CustomBackgrouns]
    return Plugins;
}
