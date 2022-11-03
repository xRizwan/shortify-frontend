<template>
  <h2 class="center heading">Shortened URLs</h2>
  <main class="container">
    <div class="row" :hidden="urls.length === 0" v-bind:key="url.id + String(index)" v-for="(url, index) in allUrls">
      <div class="short">{{url.short}}</div>
      <Button text="Copy!" class="btn" @on-click="copy(url.short)"/>
    </div>
    <div class="row" v-show="urls.length === 0">No URLs</div>
  </main>
</template>

<script lang="ts">
import Button from '..//components/Button.vue';
import { useUserStore } from '../stores/user';
import { API_BASE, makeUrl, successToastOptions } from '../helper';
import { useToast } from 'vue-toastification';
import useClipboard from 'vue-clipboard3'
import type { Url } from '../typing'

export default {
  setup(){
    const toast = useToast();
    const user = useUserStore() 
    const { toClipboard } = useClipboard();
    return { toast, user, toClipboard }
  },
  name: 'UrlsView',
  components: {Button},
  data(){
    return {
      urls: [],
    }
  },
  computed: {
    allUrls() {
      return this.urls.map((url: Url) => ({...url, short: (makeUrl(url.short))}))
    }
  },
  methods: {
    copy(short: string) {
      this.toClipboard(short)
      this.toast.success('Copied to clipboard!', successToastOptions)
    }
  },
  async mounted() {
    const headers = {"authorization": "Bearer " + this.user.token}
    const response = await fetch(`${API_BASE}api/shortify`, {method: "GET", headers: headers})
    const data = await response.json()
    this.urls = data
  },
}
</script>

<style scoped>
.heading {
  margin-top: 30px;
  margin-bottom: 30px;
}
.container{
  max-width: 600px;
  border-radius: 10px;
  margin: 0 auto;
  height: 500px;
  background: aliceblue;
  display: flex;
  flex-direction: column;
  
  box-shadow: 0px 0px 10px var(--m-color);
  font-family: monospace;
  padding: 10px;

  overflow-y: scroll;
}

.container::-webkit-scrollbar {
  width: 5px;
}

/* Track */
.container::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
.container::-webkit-scrollbar-thumb {
  background: var(--m-color);
}

/* Handle on hover */
.container::-webkit-scrollbar-thumb:hover {
  background: var(--m-color-hover);
}

.row {
  display: flex;
  flex-direction: row;
  margin-top: 25px;
  justify-content: center;
}

.center {
  text-align: center;
}

.short {
  font-size: 12px;
  background: white;

  border-radius: 8px;
  width: 320px;
  padding: 10px;
  box-sizing: content-box;
  
  white-space: nowrap;
  overflow-x: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none; 
  
  border: 1px solid var(--m-color);
  text-shadow: 0px 0px 5px var(--m-color);
  height: fit-content;
}
.short::-webkit-scrollbar {
  display: none;
}

.btn {
  width: 80px;
  height: 30px;
  margin-left: 10px;
  margin-top: 5px;
}
</style>