<template>
  <div class="grid gap-y-8">
    <div>
      <CallToAction />
    </div>
    <div>
      <AisFooter />
    </div>
    <div class="p-8 bg-green-50">
      <AisButton variant="primary" hover fast press>Test</AisButton>
    </div>
    <div class="p-4">
      <pre>{{ JSON.stringify(tailwindConfig, null, 2) }}</pre>
    </div>
  </div>
</template>

<script setup>
import { AisFooter, AisButton } from '@ais-public/ais-components'
import tailwindConfig from '#tailwind-config'
</script>
