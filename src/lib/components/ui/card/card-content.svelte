<div bind:this={ref} class={cn('p-6', className)} {...restProps}>
    {@render children?.()}
</div>

<script>
import {cn} from '$lib/utils.js'

let {ref = $bindable(null), class: className, children, ...restProps} = $props()
</script>
