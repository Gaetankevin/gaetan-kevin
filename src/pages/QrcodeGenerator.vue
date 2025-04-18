<template>
  <q-page padding class="column items-center">
    <q-input v-model="text" label="Texte ou URL à encoder" filled class="q-mb-md" />

    <q-btn label="Générer QR Code" color="primary" @click="generateQR" class="q-mb-md" />

    <canvas ref="canvas" class="q-mb-md" />

    <q-btn v-if="qrGenerated" label="Télécharger" icon="cloud_download" @click="downloadQR" />

    <q-separator spaced />

    <div class="q-mt-md">
      <h6>Historique :</h6>
      <ul>
        <li v-for="(item, index) in history" :key="index">
          {{ item }}
        </li>
      </ul>
    </div>
  </q-page>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import QRCode from 'qrcode'

const text = ref('')
const canvas = ref(null)
const qrGenerated = ref(false)
const history = ref([])

onMounted(() => {
  const saved = JSON.parse(localStorage.getItem('qr-history')) || []
  history.value = saved
})

function generateQR() {
  if (!text.value) return
  QRCode.toCanvas(canvas.value, text.value, { width: 256 }, err => {
    if (err) console.error(err)
    qrGenerated.value = true
    if (!history.value.includes(text.value)) {
      history.value.unshift(text.value)
      localStorage.setItem('qr-history', JSON.stringify(history.value))
    }
  })
}

function downloadQR() {
  const link = document.createElement('a')
  link.download = 'qrcode.png'
  link.href = canvas.value.toDataURL()
  link.click()
}
</script>
