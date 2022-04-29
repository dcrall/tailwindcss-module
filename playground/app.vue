<template>
  <div class="grid gap-y-0">
    <div class="px-8 py-12 flex gap-x-4 items-baseline">
      <AisInput icon="person" />
      <AisButton variant="primary" icon="save" hover fast press>Test</AisButton>
    </div>
    <div>
      <AisFooter />
    </div>
<!--    <div>-->
<!--      <CallToAction />-->
<!--    </div>-->
<!--    <div class="p-4">-->
<!--      <pre>{{ JSON.stringify(tailwindConfig, null, 2) }}</pre>-->
<!--    </div>-->
  </div>
</template>

<script setup>
import { AisFooter, AisButton, AisInput } from '@ais-public/ais-components'
//import tailwindConfig from '#tailwind-config'
</script>
