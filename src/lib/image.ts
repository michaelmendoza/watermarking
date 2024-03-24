
export const blueFilter = (canvas : any) => {
        
    const ctx = canvas.getContext('2d');
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

    for (let p = 0; p < imageData.data.length; p += 4) {
        const i = p / 4;
        const x = i % canvas.width;
        const y = (i / canvas.height) >>> 0;

        const r = imageData.data[p + 0];
        const g = imageData.data[p + 1];
        const b = imageData.data[p + 2];

        imageData.data[p + 0] = r;
        imageData.data[p + 1] = r;
        imageData.data[p + 2] = r;
        imageData.data[p + 3] = 255;
    }

    ctx.putImageData(imageData, 0, 0);
}