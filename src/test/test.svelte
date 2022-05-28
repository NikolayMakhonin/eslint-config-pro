<script lang="ts">
  import {onMount} from 'svelte'
  type Type = {
    prop: {[key: string]: any}
  }
  let x: Type
  function init(value: Type) {
    x = value
  }
  onMount(() => {
    init({} as Type)
    console.log(x)
  })
</script>

<body>

</body>
