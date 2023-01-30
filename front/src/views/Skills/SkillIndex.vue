<template>
  <div class="flex justify-end m-2 p-2">
    <RouterLink
      :to="{ name: 'SkillCreate' }"
      class="px-4 py-2 bg-indigo-400 hover:bg-indigo-700"
      >Create</RouterLink
    >
  </div>
  <div class="mt-12">
    <div class="relative overflow-x-auto">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead
          class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
        >
          <tr>
            <th scope="col" class="px-6 py-3">Name</th>
            <th scope="col" class="px-6 py-3">Slug</th>
            <th scope="col" class="px-6 py-3" colspan="3">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="skill in skills"
            :key="skill.id"
            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
          >
            <td class="px-6 py-4">{{ skill.name }}</td>
            <td class="px-6 py-4">{{ skill.slug }}</td>

            <button class="px-4 py-2 mr-4 bg-red-700 text-white" 
            @click="destroySkill(skill.id)">
              Delete
            </button>
            <RouterLink
              class="px-4 py-2 mr-4 bg-indigo-700 hover:bg-indigo-500 text-white"
              :to="{ name: 'SkillEdit', params: { id: skill.id } }"
              >Edit</RouterLink
            >
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import useSkills from "../../composable/skills";
const { skill,skills, getSkills, destroySkill } = useSkills();
onMounted(() => getSkills());
</script>

<style></style>
