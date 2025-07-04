<script lang="ts">
  import { writable } from 'svelte/store'

  let text = writable('Link')
  let href: any = '#'
</script>

<a {href}>{$text}</a>
