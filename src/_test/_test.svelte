<script lang="ts">
  import {onMount} from 'svelte'
  type Type = {
    prop: {[key: string]: any}
  }
  let x: Type[] = [
    null,
    null,
  ]
  function init(value: Type) {
    x[0] = value
  }
  onMount(() => {
    init({} as Type)
    console.log(x)
  })
</script>

<body>

</body>
