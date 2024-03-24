<script lang="ts">
    	import { onMount } from 'svelte';
        import { blueFilter } from '$lib/image';
        import testimage from '$lib/images/testimages_screenshot.jpg';
        let canvas : any;

        onMount(() => {
            const ctx = canvas.getContext('2d');
            const img = new Image();
            img.src = testimage;
            img.onload = () => {
                ctx.drawImage(img, 0, 0);
                blueFilter(canvas);
            };

        })
</script>

<h1> Welcome to Watermarking Experiments </h1>

<canvas bind:this={canvas} width={256} height={256} />

<style>
	canvas {
		background-color: #666;
	}
</style>