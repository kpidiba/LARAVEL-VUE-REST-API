<template>
  Edit
  <div class="mt-12">
    <div class="space-y-6">
      <form
        class="max-w-md mx-auto p-4 bg-yellow shadow-md rounded bg-yellow-400"
        @submit.prevent="updateSkill($route.params.id)"
      >
        <div class="relative z-0 mb-6 group">
          <input
            v-model="skill.name"
            type="text"
            name="name"
            id="name"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            for="name"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >Name</label
          >
          <div v-if="errors.name">
            <span class="text-red-400">{{ errors.name[0] }}</span>
          </div>
        </div>
        <div class="relative z-0 mb-6 group">
          <input
            v-model="skill.slug"
            type="text"
            name="slug"
            id="slug"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            for="slug"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >Slug</label
          >
          <div v-if="errors.slug">
            <span class="text-red-400">{{ errors.slug[0] }}</span>
          </div>
        </div>
        <button type="submit" class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Modifier</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import useSkills from "../../composable/skills";

const { skill, getSkill, updateSkill, errors } = useSkills();

const props = defineProps({
    id:{
        required:true,
        type:String
    }
})


onMounted(() => getSkill(props.id))
</script>

<style>

</style>