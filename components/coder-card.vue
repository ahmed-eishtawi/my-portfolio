<script setup lang="ts">
type Coder = {
  name: string;
  skills: string[];
  hardWorker: boolean;
  problemSolver: boolean;
  hireable: () => boolean;
};

const coder = ref<Coder>({
  name: "Ahmed Eishtawi",
  skills: ["Node", "Vue", "Nuxt", "Vuetify", "Tailwind"],
  hardWorker: true,
  problemSolver: true,
  hireable() {
    return this.hardWorker && this.problemSolver && this.skills.length >= 5;
  },
});
</script>

<template>
  <div class="transform hover:scale-95 transition-all duration-500">
    <div class="rounded-lg select-none border border-slate-700 relative">
      <div class="flex flex-row">
        <div
          class="h-[1px] bg-gradient-to-r from-transparent via-pink-500 to-violet-600 w-full"
        ></div>
        <div
          class="h-[1px] bg-gradient-to-r from-violet-600 to-transparent w-full"
        ></div>
      </div>
      <div class="px-8 py-5">
        <div class="flex flex-row space-x-2">
          <div class="rounded-full bg-red-400 w-3 h-3"></div>
          <div class="rounded-full bg-orange-400 w-3 h-3"></div>
          <div class="rounded-full bg-green-200 w-3 h-3"></div>
        </div>
      </div>
      <div class="px-8 py-8 border-t-[2px] border-slate-800 overflow-hidden">
        <code class="font-mono">
          <div class="blink">
            <span class="text-pink-500 mr-2">const</span>
            <span class="text-white mr-2">coder</span>
            <span class="text-pink-500 mr-2">= </span>
            <span class="text-gray-400">{ </span>
          </div>
          <div>
            <span class="text-white ml-8 mr-2">name: </span>
            <span class="text-gray-400">'</span
            ><span class="text-amber-300">{{ "Ahmed Eishtawi" }}</span
            ><span class="text-gray-400">',</span>
          </div>
          <div>
            <span class="text-white ml-8 mr-2">skills:</span>
            <span class="text-gray-400">[</span>
            <span
              v-for="(skill, index) in coder.skills"
              :key="skill"
            >
              <span class="text-gray-400">'</span>
              <span class="text-amber-300">{{ skill }}</span>
              <span class="text-gray-400">'</span>

              <span
                v-if="index !== coder.skills.length - 1"
                class="text-gray-400"
                >,
              </span>
            </span>
            <span class="text-gray-400">],</span>
          </div>
          <div>
            <span class="text-white ml-8 mr-2">hardWorker:</span
            ><span class="text-orange-400">{{}}</span
            ><span class="text-gray-400">,</span>
          </div>
          <div>
            <span class="text-white ml-8 mr-2">problemSolver:</span
            ><span class="text-orange-400">true</span
            ><span class="text-gray-400">,</span>
          </div>
          <div>
            <span class="text-green-400 ml-8 mr-2">hireable:</span
            ><span class="text-orange-400">function</span
            ><span class="text-gray-400">() {</span>
          </div>
          <div>
            <span class="text-orange-400 ml-16 mr-2">return</span
            ><span class="text-gray-400">(</span>
          </div>
          <div>
            <span class="text-cyan-400 ml-24">this.</span
            ><span class="text-white mr-2">hardWorker</span
            ><span class="text-amber-300">&amp;&amp;</span>
          </div>
          <div>
            <span class="text-cyan-400 ml-24">this.</span
            ><span class="text-white mr-2">problemSolver</span
            ><span class="text-amber-300">&amp;&amp;</span>
          </div>
          <div>
            <span class="text-cyan-400 ml-24">this.</span
            ><span class="text-white mr-2">skills.length</span
            ><span class="text-amber-300 mr-2">&gt;=</span
            ><span class="text-orange-400">5</span>
          </div>
          <div><span class="text-gray-400 ml-16 mr-2">);</span></div>
          <div><span class="text-gray-400 ml-8">}</span></div>
          <div><span class="text-gray-400">}</span></div></code
        >
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Add custom styling here if needed */
</style>
